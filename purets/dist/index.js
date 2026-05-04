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
    _coureCount = 1;
    city = "kolkata";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._coureCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._coureCount = courseNum;
    }
}
const neel = new User("h@h.com", "neel");
console.log(neel.email);
console.log(neel.name);
console.log(neel.city);
export {};
//# sourceMappingURL=index.js.map