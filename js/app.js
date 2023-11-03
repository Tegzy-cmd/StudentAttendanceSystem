import { User } from "./user.js";
import { DataStore } from "./store.js";
let ds = new DataStore()
let user
let key
window.addEventListener("load", (e) => {
  updateTable()
  let form = document.getElementById("myForm");
  let name = document.getElementById("fullName");
  let className = document.getElementById("className");
  let seatNo = document.getElementById("seatNo")
  let status = "NIL"
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    user = new User(name.value, className.value, seatNo.value, status)
    user.saveUser(user)
    location.reload()
    form.reset()
  })
  
});

function updateTable(){
  let attendance_btn = ''
  user = new User()
  const data = user.getUsers()
  let tableBody = document.querySelector('tbody')
  for(key of data){
  let keyObj = ds.toObject(localStorage.getItem(key))
  let remark
  if(keyObj.status == "NIL"){
        attendance_btn = '<td><input type="button" class="attendance-btn" id="present" value="present"> <input class="attendance-btn" id="absent" type="button" value="absent"></td>'
  }
  else{
    attendance_btn = ''
  }

  switch (keyObj.status) {
    case 'Present':
        remark = '<td class="present">'+keyObj.status+'</td>'
      break;
      case 'Absent':
        remark = '<td class="absent">'+keyObj.status+'</td>'
      break;
    default:
      remark = '<td>'+keyObj.status+'</td>'
      break;
  }
  
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


}