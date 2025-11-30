// PART 1: STRING METHODS
//------------------------------------------------------

// 1. Convert to Uppercase
let pet = "golden retriever";
let upperPet = pet.toUpperCase();
console.log(upperPet); // "GOLDEN RETRIEVER"

// 2. Find the Length of a String
let question = "Can you solve this problem?";
let length = question.length;
console.log(length); // 27

// 3. Replace a Word in a String
let activity = "This game is boring";
let fixedActivity = activity.replace("boring", "exciting");
console.log(fixedActivity); // "This game is exciting"

// 4. Extract a Substring
let headline = "Choose Your Adventure!";
let extracted = headline.substring(12, 21);
console.log(extracted); // "Adventure"


// PART 2: ARRAY METHODS
//------------------------------------------------------

// 1. Add an Item to an Array
let desserts = ["Ice Cream", "Pie", "Pudding"];
desserts.push("Cake");
console.log(desserts); 
// ["Ice Cream", "Pie", "Pudding", "Cake"]

// 2. Check if an Array Includes an Item
let cities = ["London", "New York", "Tokyo"];
let hasParis = cities.includes("Paris");
console.log(hasParis); // false

// 3. Combine Two Arrays
let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];
let combined = cars.concat(trucks);
console.log(combined);
// ["Sedan", "Coupe", "Pickup", "SUV"]

// 4. Find Index of an Item
let desserts2 = ["Ice Cream", "Pie", "Pudding", "Cake"];
let indexPie = desserts2.indexOf("Pie");
console.log(indexPie); // 1


// BONUS TASK: Reverse a String
//------------------------------------------------------
let word = "Technology";
let reversed = word.split("").reverse().join("");
console.log(reversed); // "ygolonhceT"
