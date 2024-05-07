"use strict";

let label = {
    firstAndLastName: "Monse Cabral",
    address: "123 House St",
    city: "Atlanta",
    state: "GA",
    zip: "30000"
};

function printContact(label){
    console.log(label.firstAndLastName);
    console.log(label.address);
    console.log(label.city + ", " + label.state);
    console.log(label.zip);
};

printContact(label);
