// class User{
//     email:string
//     name:string
//     readonly city: string = "kolkata"
//     constructor(email:string , name:string){
//         this.email = email
//         this.name = name
//     }
// }
class User{
    readonly city: string = "kolkata"
    constructor(
        public email:string ,
        public name:string){
    }
}


const neel = new User("h@h.com" ,"neel")

console.log(neel.email)
console.log(neel.name)
console.log(neel.city)