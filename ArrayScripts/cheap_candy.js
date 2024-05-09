"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Pelon", price: 5.89},
    {product: "Tamarindo", price: 7.50},
    {product: "Blowpops", price: 5.29},
    {product: "Reese's", price: 8.89},
    {product: "Skittles", price: 6.29},
    {product: "Chamoy", price: 5.19},
];


let numItems = products.length;


// Which candies costs less than $4.00?

let lessThan4 = [];

for (let i = 0; i < numItems; i++){
    if (products[i].product == "Plain M&Ms"){
        lessThan4.push(products[i].product);
    }
};

let lessThan42 = [];

for (let i = 0; i < numItems; i++){
    if (products[i].product == "Peanut M&Ms"){
        lessThan42.push(products[i].product);
    }
};

let lessThan43 = [];

for (let i = 0; i < numItems; i++){
    if (products[i].product == "Swedish Fish"){
        lessThan43.push(products[i].product);
    }
};

console.log(lessThan4 + ", " + lessThan42 + " and " + lessThan43);

// Which candies has "M&M" its name?

let mNM = [];

for (let i = 0; i < numItems; i++){
    if (products[i].product == "Plain M&Ms"){
        mNM.push(products[i].product);
    }
};

let mNM2 = [];

for (let i = 0; i < numItems; i++){
    if (products[i].product == "Peanut M&Ms"){
        mNM2.push(products[i].product);
    }
};

console.log(mNM + " and " + mNM2);

// Do we carry "Swedish Fish"?

let sFish = [];

for (let i = 0; i < numItems; i++){
    if (products[i].product == "Swedish Fish"){
        sFish.push(products[i].product);
    }
};

console.log("Yes, we carry " + sFish);