interface User {
    readonly dbID: number
    email: string;
    userId : number;
    googleId?: string;
    startTrial: () => string;
    endTrial(): string;
    getDiscount: (coupon:string , value:number)=> number
}


interface User{
    githubToken:string
}


interface Admin extends User{
    role: "admin"|"TA"|"learner"
}

const neel : User = {
    dbID: 123456,
    email: "neel@neel.com",
    userId: 20936219,
    startTrial: () => { return "Trial Started "},
    endTrial: () => {return "Trial ended"},
    getDiscount:(coupon:string , value:number)=>{
        if(coupon == "10"){
            return value
        }
        else{
            return 5
        }
    },
    githubToken: "Swapnaneel1616"

}


interface point{
    x:number
    y:number
}

function printCord(pt:point){
    console.log("The coordinate for x point is "+ pt.x)
    console.log("The coordinate for y point is "+pt.y)
}

printCord({x:100,y:200})



export{}