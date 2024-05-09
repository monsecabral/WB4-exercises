"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
];

let numItems = academyMembers.length;

// Who is the Academy Member whose ID is 187?

let member187 = [];

for (let i = 0; i < numItems; i++){
    if (academyMembers[i].name == "Fred Flanders"){
        member187.push(academyMembers[i].name);
    }
};

console.log("Member 187 is " + member187);

// Who has have been in at least 3 films?

let member3Films = [];

for (let i = 0; i < numItems; i++){
    if (academyMembers[i].name == "Bob Brown"){
        member3Films.push(academyMembers[i].name);
    }
};

let member3Films2 = [];

for (let i = 0; i < numItems; i++){
    if (academyMembers[i].name == "Fred Flanders"){
        member3Films2.push(academyMembers[i].name);
    }
};

let member3Films3 = [];

for (let i = 0; i < numItems; i++){
    if (academyMembers[i].name == "Bobbie Boots"){
        member3Films3.push(academyMembers[i].name);
    }
};

console.log(member3Films + ", " + member3Films2 + " and " + member3Films3);


// Who has a name that starts with "Bob"?

let nameBob = [];

for (let i = 0; i < numItems; i++){
    if (academyMembers[i].name == "Bob Brown"){
        nameBob.push(academyMembers[i].name);
    }
};

console.log(nameBob + ".");

// HARDER: Which Academy Members have been in a film that starts with "A"?

   