"use strict";
let score = 33;
score = "55";
let neel = {
    name: "neel",
    id: 1
};
neel = {
    username: "Neel",
    id: 1
};
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
getDbId(2);
getDbId("3");
const myArray = [1, "hello", true];
let mySeatAllotment;
mySeatAllotment = "aisle";
