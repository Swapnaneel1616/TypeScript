"use strict";
const neel = {
    dbID: 123456,
    email: "neel@neel.com",
    userId: 20936219,
    startTrial: () => { return "Trial Started "; },
    endTrial: () => { return "Trial ended"; },
    getDiscount: (coupon) => {
        if (coupon == "10") {
            return 10;
        }
        else {
            return 5;
        }
    }
};
