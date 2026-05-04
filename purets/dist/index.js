// class User{
//     email:string
//     name:string
//     readonly city: string = "kolkata"
//     constructor(email:string , name:string){
//         this.email = email
//         this.name = name
//     }
// }
class User {
    email;
    name;
    city = "kolkata";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const neel = new User("h@h.com", "neel");
console.log(neel.email);
console.log(neel.name);
console.log(neel.city);
export {};
//# sourceMappingURL=index.js.map