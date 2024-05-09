"use strict";

function compareAscendingNumber(a, b){
    return a - b;
};

function caseInsensitiveCompare(a, b){
    let aAsUpper = a.toUpperCase();
    let bAsUpper = b.toUpperCase();
    if ( aAsUpper < bAsUpper){ return -1;}
    else if (aAsUpper == bAsUpper ) {return 0;}
    else {return 1;}
}

let students = ["100", "11", "52", "8300", "Natalie", "Brittany", "Zachary", "Monse", "Zana", "Ian", "Tracie", "Yoseph", "Adama", "Julian"];

console.log("BEFORE");
console.log(students);

students.sort(caseInsensitiveCompare);

console.log();
console.log("AFTER");
console.log(students);


console.log();
console.log("BEFORE");
console.log(numbers);

numbers.sort(compareAscendingNumber);

numbers.sort(function (a, b){ return a - b});
numbers.sort((a, b) => a - b );

console.log();
console.log("AFTER");
console.log(numbers);