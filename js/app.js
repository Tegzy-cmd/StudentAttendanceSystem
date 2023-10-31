import {User} from './user.js'
import {DataStore} from './store.js'
window.addEventListener('load', (e) => {

    let form = document.getElementById('myForm')
    let name = document.getElementById('fullName')
    let className = document.getElementById('className')
    let seatNo = document.getElementById('seatNo')

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(name.value)
      const user = new User(name.value,className.value,seatNo.value);
      const data = new DataStore()
      user.saveUser(user)
      
      

   })

})