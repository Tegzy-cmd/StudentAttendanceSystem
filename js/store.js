export class DataStore {

  pushData(strUser) {
    localStorage.setItem(this.toString(strUser.name),this.toString(strUser))
  }

  toString(objUser){
    return JSON.stringify(objUser)
  }
  toObject(strUser){
    return JSON.parse(strUser)
  }

  fetchData(){
    Object.keys(localStorage).forEach(key=>{
      localStorage.getItem(`${key}`)
    })
  }
  getData(){

  }
}
