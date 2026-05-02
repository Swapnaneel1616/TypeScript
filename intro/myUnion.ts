let score:number | string = 33

score = "55"


type user = {
    name: string;
    id: number
}

type admin = {
    username: string;
    id:number
}

let neel : user|admin =
    {
        name:"neel",
        id:1
    }

neel = {
    username:"Neel",
    id:1
}


function getDbId(id:number|string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    else{
        id+2
    }
}

getDbId(2)
getDbId("3")


const myArray : (string|number|boolean)[] = [1, "hello", true]

let mySeatAllotment: "aisle"|"middle"|"window" 

mySeatAllotment = "aisle"