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
class SubUser extends User {
    isFamily = true;
    set courseCountUpdated(courseUpdate) {
        this._coureCount = courseUpdate;
    }
    get courseCountUpdated() {
        return `Course Count is ${this._coureCount}`;
    }
}
const neel = new User("h@h.com", "neel");
console.log(neel.email);
console.log(neel.name);
console.log(neel.city);
neel.courseCount = 23;
console.log(neel.courseCount);
const sub_neel = new SubUser("new@example.com", "new_user");
sub_neel.courseCountUpdated = 4;
console.log("The name " + sub_neel.name + " The email " + sub_neel.email + " with course count" + sub_neel.courseCountUpdated);
export {};
//# sourceMappingURL=index.js.map