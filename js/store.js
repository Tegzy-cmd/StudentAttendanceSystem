//Export DataStore class
export class DataStore {
  // class properties
  #key
  
  // method to store user object in localstorge and takes user object as parameter
  pushData(strUser) {
    localStorage.setItem(strUser.name,this.toString(strUser)) //storing user object in localstorage after converting to string using the toString() method  
  }
  // method that returns all keys in the local storage
  fetchKeys(){
    return this.#key = Object.keys(localStorage) //return local storage keys (object)
}
// takes user object as parameter and returns and string of the object
toString(objUser){
  return JSON.stringify(objUser) // using json stringify() method to convert  object to string
}// takes user string as parameter and returns an object of the string
toObject(strUser){
  return JSON.parse(strUser) // using json parse() method to convert string to object
}
}
