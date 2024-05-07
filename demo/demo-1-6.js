"use strict";

let emp1 = {
    employeeId: "1",
    name: "Ezra",
    jobTitle: "Theater Teacher",
    payRate: 38.46
};


let emp2 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 43.27
};

//two different ways to write it
console.log(emp2.jobTitle);

console.log(emp2["jobTitle"]);