function addTwo(num:number):number{
    return num +2 
    // return "hello"
}

addTwo(5)


function getUpper(val:string){
    return val.toUpperCase()
}

function signUP(name:string, email:string, isPaid:boolean){
}

signUP("Neel", "neel@example.com", true)


let loginUser = (name:string, email:string, isPaid:boolean) =>{}

loginUser("Neel", "neel@example.com", true)


const getHero = (s:string):string => {
    return ""
}

const heroes = ["thor", "spiderman", "ironman"]

heroes.map(hero => {
    return `hero is ${hero}`
}) // nO NEED TO EXPLICITLY DEFINE THE HERO

getUpper("neel")

function consoleError(errmsg : string):void{
    console.log(errmsg)
}

function handleError(errmsg : string): never{
    throw new Error(errmsg) //Never is used when we want to throw an error
}






export {}