export class DataStore {
  #key
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
