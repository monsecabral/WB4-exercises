"use strict";

let emp = {
    employeeId: "1",
    name: "Ezra",
    jobTitle: "Theater Teacher",
    payRate: 38.46
}

function printEmployeeAndPay(emp){
    console.log("----------")
    console.log("Name " + emp.name);
    console.log("Pay" + emp.payRate);
    console.log("----------")
}

printEmployeeAndPay(emp);