const User = {
    name : "neel",
    email : "neel@example.com",
    isActive : true
}


function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
//Creating the return type of the function objects
}


let newUser = { name: "neel", isPaid: false, email: "n@n"}

createUser(newUser) // Though we dont have email as a parameter we can pass the  object 

function createCourse():{name:string , price:number}{
    return {name:"typescript", price: 999}
}


type User = {
    name : string;
    email: string;
    isActive: boolean;
}

function createUsers(user: User):User{
    return {name: user.name, email: user.email, isActive: user.isActive}
}

createUsers({name:"neel", email: "neel@example.com", isActive: true})




export{}