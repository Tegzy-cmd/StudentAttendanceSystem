import { DataStore } from "./store.js";
export class User{
    name
    className
    seatNo
    status
    #data = new DataStore()
    constructor(name,className,seatNo,status){
        this.name = name;
        this.className = className
        this.seatNo = seatNo
        this.status = status
        
    }
    
    getUsers(){
        return this.#data.fetchKeys()
        
    }

    saveUser(user){ 
       this.#data.pushData(user)
       
       
    }
    

}
// export default { user }