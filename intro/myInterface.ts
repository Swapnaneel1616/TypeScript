interface User {
    readonly dbID: number
    email: string;
    userId : number;
    googleId?: string;
    startTrial: () => string;
    endTrial(): string;
    getDiscount: (coupon:string)=> number
}

const neel : User = {
    dbID: 123456,
    email: "neel@neel.com",
    userId: 20936219,
    startTrial: () => { return "Trial Started "},
    endTrial: () => {return "Trial ended"},
    getDiscount:(coupon:string)=>{
        if(coupon == "10"){
            return 10
        }
        else{
            return 5
        }
    }
}