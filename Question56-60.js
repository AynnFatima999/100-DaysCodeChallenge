/* *Question 56:* Keep Only Strings: Given a mix of different types of items, make a new list that has only the words. */
let mixString = [1, "Aynn", 5, "Raza", 9, "Jafferi"];
let findStr = mixString.filter((val) => (typeof val === "string"));
console.log(findStr);
/* *Question 57:* Find the Average Grade: Given a list of grades, calculate the average grade. */
let grades = [50, 44, 32, 20, 40];
//we use reduce method to calculate the sum of an array first:
//then devide the total value from the lenght of an array to get average.
let sum = grades.reduce((pre, curr) => (pre + curr));
console.log(sum / grades.length);
/* *Question 58:* Average Score Calculator: Write a simple program that can take lots of scores and find their average. */
function calculateAverage(...scores) {
    let find = scores.reduce((pre, curr) => (pre + curr));
    return find / scores.length;
}
console.log(calculateAverage(90, 45, 58, 33));
console.log(calculateAverage(80, 47, 65, 14));
/* 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later. */
// This program makes a function that adds a specific number
function makeAdder(val) {
    return function (number) {
        return number + val;
    };
}
// Making a magic box that adds 5
let addNum = makeAdder(14);
console.log(addNum(10)); // If we put 10 in the box, it gives us 24
/*Question 60:* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age. */
function userData() {
    let name = "Ali";
    let age = 32;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, age: ${age}`);
        }
    };
}
export {};
