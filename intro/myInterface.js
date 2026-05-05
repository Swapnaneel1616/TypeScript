const neel = {
    dbID: 123456,
    email: "neel@neel.com",
    userId: 20936219,
    startTrial: () => { return "Trial Started "; },
    endTrial: () => { return "Trial ended"; },
    getDiscount: (coupon, value) => {
        if (coupon == "10") {
            return value;
        }
        else {
            return 5;
        }
    },
    githubToken: "Swapnaneel1616"
};
function printCord(pt) {
    console.log("The coordinate for x point is " + pt.x);
    console.log("The coordinate for y point is " + pt.y);
}
printCord({ x: 100, y: 200 });
export {};
