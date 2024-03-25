/* *Question 51:* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function. */
function calculateArea(width, height) {
    return width * height;
}
//arrow function:
let aeroArea = (width, height) => {
    console.log(width * height);
};
aeroArea(16, 5);
/**Question 52:* Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
*/
let smartphone = {
    brand: "Samsung Galaxy",
    model: "A-series",
    specs: {
        storage: "164GB",
        size: "6.5 inches",
        color: "silver",
        price: 45000
    }
};
console.log(`Mobilephone Details`, smartphone);
/**Question 53:* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them. */
let developerSkills = {
    Languages: ["CSS", "JAVASCRIPT", "TYPEESCRIPT"],
    Framework: ["Bootstrap", "Angular", "Next.js"],
    tools: ["PostCSS", "Git", "NPM"]
};
let { Languages, Framework, tools } = developerSkills;
console.log(`languages: ${Languages} \n framework: ${Framework} \ntools: ${tools}`);
/* question 54:* Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices. */
function flexibleObject(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userChoice = flexibleObject("Mode", "DARK");
console.log(userChoice);
/**Question 55:* Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value. */
let square = [2, 6, 8, 10];
//aplying for each loop to get each element:
square.forEach((val) => console.log(val * val));
export {};
