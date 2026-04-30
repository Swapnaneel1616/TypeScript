const User = {
    name: "neel",
    email: "neel@example.com",
    isActive: true
};
function createUser({ name, isPaid }) {
    //Creating the return type of the function objects
}
let newUser = { name: "neel", isPaid: false, email: "n@n" };
createUser(newUser); // Though we dont have email as a parameter we can pass the  object 
function createCourse() {
    return { name: "typescript", price: 999 };
}
export {};
