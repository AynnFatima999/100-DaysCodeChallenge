/*  *Day 16 Challenge: Start Coding!* 🚀

*Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop. */

const Laptop = {
    make : "Acer",
    model : "Microsoft" ,
    year : 2015,
}

function describe(){
    console.log(`I have a laptop named ${Laptop.make} manufactured by ${Laptop.model} Coporation, in ${Laptop.year}` )
}
describe();






/**Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables. */

 
 let collection :any =
   [{
    make : "Lenovo Yoga",
    model : "lenovo",
    year :  2021
},


 {
    make : "Acer",
    model : "Microsoft",
    year :  2021
},


 {
    make : "Dell",
    model : "XPX",
    year :  2024
}]


//destructuring:

let [laptopOne ,laptopTwo ,laptopThree]= collection


console.log(collection);





/* *Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result. */



let dataOne = ["Dell", "Lenovo", "Acer"]
let dataTwo = ["HP", "Macbook", "Samsung Galaxy Book Odyssey"]

let combine = [...dataOne, ...dataTwo]
console.log(combine.sort());


// just combine prices:

let PriceaOne = [420000, 150000, 85000]
let PriceTwo = [350000, 450000, 250000]

let combined_price = [...PriceaOne, ...PriceTwo].sort()


console.log(combined_price);




/**Question 49:* Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby. */


function myHobbies(...hobbies : string[]) {

    hobbies.forEach(hobby => {
        console.log(`I love ${hobby}`)
    })

    }

myHobbies("Book reading", "Horse riding", "Guardning", "Shooting");





/**Question 50:* Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities. */

//Tempelate Literals:

let idealDay = `To make my day ideal: \n 1.I woke up early. \n 2.Went for morning walk. \n 3.Had healthy breakfast. \n 4.Do every thing on time.`



console.log (idealDay);































