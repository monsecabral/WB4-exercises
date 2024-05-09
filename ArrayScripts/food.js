"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chipss and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
];


let lunchLength = lunch.length;
let lunchSubtotal = - 0;
for (let i = 0 ; i < lunchLength ; i ++){
    lunchSubtotal += lunch[i].price;


}

console.log(lunchSubtotal);

let taxRate = subtotal * 0.08;
let tipRate = subtotal * 0.18;
//let totalDue = subtotal + tax + tipAmount;

let taxAmount = lunchSubtotal * taxRate;
let tipAmount = lunchSubtotal * tipRate;

let total = lunchSubtotal + taxAmount + tipAmount;

console.log(`Tax amount:    ${taxAmount}`);
console.log(`Tip amount:    ${tipAmount}`);
console.log(`Total:    ${total}`);


//console.log(subtotal.toFixed(2));
//console.log(taxRate.toFixed(2));
//console.log(tipAmount.toFixed(2));
//console.log(totalDue.toFixed(2));