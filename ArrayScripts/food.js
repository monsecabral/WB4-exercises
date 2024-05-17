"use strict";

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];



let lunchSubtotal = getPriceTotal(lunch);

console.log(lunchSubtotal);

let taxRate = 0.08;
let tipRate = 0.18;

let taxAmount = lunchSubtotal * taxRate;
let tipAmount = lunchSubtotal * tipRate;

let total = lunchSubtotal + taxAmount + tipAmount;

console.log(`Tax Amount:   ${taxAmount}`);
console.log(`Tip Amount:   ${tipAmount}`);
console.log(`Total:        ${total}`);


function getPriceTotal(order) {
    let orderLength = order.length;
    let orderSubtotal = 0;
    for (let i = 0; i < orderLength; i++) {
        orderSubtotal += order[i].price;
    }
    return orderSubtotal;
}