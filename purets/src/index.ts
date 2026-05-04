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

    protected _coureCount = 1


    readonly city: string = "kolkata"
    constructor(
        public email:string ,
        public name:string){
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._coureCount
    }
    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error("Course count should be more than 1")
        }
        this._coureCount = courseNum
    }

}


class SubUser extends User{
    isFamily: boolean = true

    set courseCountUpdated(courseUpdate:number){
        this._coureCount = courseUpdate
    }

    get courseCountUpdated():string{
        return `Course Count is ${this._coureCount}`
    }
}


const neel = new User("h@h.com" ,"neel")

console.log(neel.email)
console.log(neel.name)
console.log(neel.city)
neel.courseCount = 23
console.log(neel.courseCount)



const sub_neel = new SubUser("new@example.com" , "new_user")
sub_neel.courseCountUpdated = 4
console.log("The name "+ sub_neel.name + " The email "+ sub_neel.email +" with course count"+ sub_neel.courseCountUpdated)