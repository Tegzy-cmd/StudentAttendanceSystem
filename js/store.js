//Export DataStore class
export class DataStore {
  // class properties
  #key
  
  // method to store user object in localstorge and takes user object as parameter
  pushData(strUser) {
    localStorage.setItem(strUser.name,this.toString(strUser))
  }

  fetchKeys(){
    return this.#key = Object.keys(localStorage)
}
toString(objUser){
  return JSON.stringify(objUser)
}
toObject(strUser){
  return JSON.parse(strUser)
}
}
