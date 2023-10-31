import { DataStore } from "./store.js";
export class User{
    name
    className
    seatNo
    #data
    constructor(name,className,seatNo){
        this.name = name;
        this.className = className
        this.seatNo = seatNo
        this._data = new DataStore()
    }
    
    getUsers(){
        this.#data.fetchData()
        
    }

    saveUser(user){ 
       this.#data.pushData(user)
       
       
    }

}
// export default { user }