export class User{
    name
    className
    seatNo

    constructor(name,className,seatNo){
        this.name = name;
        this.className = className
        this.seatNo = seatNo
    }
    
    getUser(){
        const student ={name:this.name,className:this.className,seatNo:this.className}
        return student
    }

}
// export default { user }