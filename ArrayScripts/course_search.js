"use strict";

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

let numItems = courses.length;


// When does the PROG200 course start?

let courseStartDate = [];

for (let i = 0; i < numItems; i++){
    if (courses[i].CourseId == "PROG200"){
        courseStartDate.push(courses[i].StartDate);
    }
};

console.log("PROG200 course starts " + courseStartDate);


// What is the title of the PROJ500 course?

let courseTitle = [];

for (let i = 0; i < numItems; i++){
    if (courses[i].CourseId == "PROJ500"){
        courseTitle.push(courses[i].Title);
    }
};

console.log("PROG200 course title is " + courseTitle);


// What are the titles of the courses that cost $50 or less?

let firstCourse = [];

for (let i = 0; i < numItems; i++){
    if (courses[i].CourseId == "PROJ500"){
        firstCourse.push(courses[i].Title);
    }
};

let secondCourse = [];

for (let i = 0; i < numItems; i++){
    if (courses[i].CourseId == "PROG300"){
        secondCourse.push(courses[i].Title);
    }
};

let thirdCourse = [];

for (let i = 0; i < numItems; i++){
    if (courses[i].CourseId == "PROG400"){
        thirdCourse.push(courses[i].Title);
    }
};

console.log("The titles of the courses that are $50 or less are " + firstCourse + ", " + secondCourse + ", " + "and " + thirdCourse + ".");


// What classes meet in "Classroom 1"?

let classroomOne = [];

for (let i = 0; i < numItems; i++){
    if (courses[i].CourseId == "PROG300"){
        classroomOne.push(courses[i].Title);
    }
};

let classroomOneT = [];

for (let i = 0; i < numItems; i++){
    if (courses[i].CourseId == "PROJ500"){
        classroomOneT.push(courses[i].Title);
    }
};

console.log(classroomOne + " and " + classroomOneT + " meet in Classroom 1.");