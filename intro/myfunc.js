function addTwo(num) {
    return num + 2;
    // return "hello"
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
function signUP(name, email, isPaid) {
}
signUP("Neel", "neel@example.com", true);
let loginUser = (name, email, isPaid) => { };
loginUser("Neel", "neel@example.com", true);
const getHero = (s) => {
    return "";
};
const heroes = ["thor", "spiderman", "ironman"];
heroes.map(hero => {
    return `hero is ${hero}`;
}); // nO NEED TO EXPLICITLY DEFINE THE HERO
getUpper("neel");
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg); //Never is used when we want to throw an error
}
export {};
