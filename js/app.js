import { User } from "./user.js"; //Imported User class
import { DataStore } from "./store.js"; //Imported DataStore class
let ds = new DataStore() // Created an object of the DataStore class
let user = new User() // Created an object of the User class
let key // variable to hold localstorage keys
let tableBody = document.querySelector('tbody') //get table body element

//Event listener to fire 💥 up when the window loads
window.addEventListener("load", (e) => {
  updateTable() // update method to get all local storage items and populate attendance table
  let form = document.getElementById("myForm"); //target form element
  let name = document.getElementById("fullName"); //target name field within the form
  let className = document.getElementById("className"); //target ClassName field within the form
  let seatNo = document.getElementById("seatNo") //target SeatNo field within the form
  let status = "NIL" //Default status for new users
  let present = document.getElementById("present") // target remark button with id present
  let absent = document.getElementById("absent") // target remark button with id absent

  // a condition block to attach event listener to present and absent button only when both button exist
  if(present && absent){ 
    //click Event Listener for present button
  present.addEventListener('click', (e)=>{
    let a = e.target.closest('tr') //use clicked button to get closest table row element
    const b = a.childNodes //get object of all child elements (td elements)
    let update = new User(b[1].textContent,b[3].textContent,b[5].textContent,'Present') // create a new user object to update the status of the user to present
    user.saveUser(update) // passed user object to the saveUser method in the User class
    location.reload() // reload page to effect changes
    
  })
  //click Event Listener for present button
  absent.addEventListener('click', (e)=>{
    let a = e.target.closest('tr') //use clicked button to get closest table row element
    const b = a.childNodes //get object of all child elements (td elements)
    let update = new User(b[1].textContent,b[3].textContent,b[5].textContent,'Absent') // create a new user object to update the status of the user to absent
    user.saveUser(update) // passed user object to the saveUser method in the User class
    location.reload() // reload page to effect changes
})
  }

// added submit event listener to the form element 
  form.addEventListener("submit", (e) => {
    e.preventDefault() // event.preventDefault() method to cancel form default behavior
    user = new User(name.value, className.value, seatNo.value, status) // created a new user object with form input as parameters
    user.saveUser(user) // Save new User
    location.reload() // reloads page
    form.reset() // reset the form for new entries
  })
  
})

// Function to update the table with saved user data
function updateTable(){
  let attendance_btn = ''
  user = new User() //new user object
  const data = user.getUsers() // create an object of keys to access user data
  
  //loop through object using keys to get user objects
  for(key of data){
  let keyObj = ds.toObject(localStorage.getItem(key)) // converting string data to Objects
  let remark
  // show remark button if user status is NIL
  if(keyObj.status == "NIL"){
        attendance_btn = '<td><input type="button" class="attendance-btn" id="present" value="present"> <input class="attendance-btn" id="absent" type="button" value="absent"></td>'
  }
  else{
    attendance_btn = '' // set button to empty
  }
//End if-else statement

  //switch statement to determine element class according to its value
  switch (keyObj.status) {
    case 'Present':
        remark = '<td class="present">'+keyObj.status+'</td>' // set  class to present if status is present
      break;
      case 'Absent':
        remark = '<td class="absent">'+keyObj.status+'</td>' // set class to absent if status is absent
      break;
    default:
      remark = '<td>'+keyObj.status+'</td>' // show element with default styling
      break;
  }
  // End Switch
  
  // add user object to table
    tableBody.innerHTML += `
    <tr class="active-row">
                    <td>${keyObj.name}</td>
                    <td>${keyObj.className}</td>
                    <td>${keyObj.seatNo}</td>
                    ${remark}
                    <td>${attendance_btn}</td>                    
                </tr>
    `
    
  }
  // End for loop


} // End update function