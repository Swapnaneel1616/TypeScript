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

    private _coureCount = 1


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


const neel = new User("h@h.com" ,"neel")

console.log(neel.email)
console.log(neel.name)
console.log(neel.city)