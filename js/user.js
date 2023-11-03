import { DataStore } from "./store.js"; // import DataStore class
//export user class
export class User{
    //class properties
    name
    className
    seatNo
    status
    #data = new DataStore() //create objext of the DataStore class

    //class constructor
    constructor(name,className,seatNo,status){
        this.name = name;
        this.className = className
        this.seatNo = seatNo
        this.status = status
        
    }
    
    // method to get user data
    getUsers(){
        return this.#data.fetchKeys() // returns an object of keys from the DataStore class
        
    }

    // method to save new user, receives a user object as parameter
    saveUser(user){ 
       this.#data.pushData(user) // calls the pushdata() method from the Datastore class and supplies user object as parameter
       
       
    }
    

}
//end of user class