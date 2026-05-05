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
function createUsers(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
createUsers({ name: "neel", email: "neel@example.com", isActive: true });
let userChecking = {
    _id: "12345",
    name: "neel",
    email: "neel@neel.com",
    isActive: true,
};
userChecking.email = "neel@example.com"; // We can chnage the email but not the id because it is read only
export {};
