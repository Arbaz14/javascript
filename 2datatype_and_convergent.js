// Primitive data types in JavaScript:
// Number
let age = 25;
// String
let name = "John Doe";
// Boolean
let isStudent = true;
let isRaining = false;
// Undefined
let x;
// Null
let y = null;
// Symbol (new in ES6)
let id = Symbol("id");
// Non-primitive data types in JavaScript:
// Object
let person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
};
// Array


// Function
let fun = function greet(name) {
  console.log(`Hello, ${name}!`);
}
let fruits = ["apple", "banana", "orange"];
// convergent
var Age = String(age)
var Age = String(isStudent)
var Age = String(x)
var Age = String(y)
// var Age=String(id)
// var Age=String(NaN)


// console.log(typeof null); // Output: "object" (this is a long-standing bug in JavaScript)
console.log(typeof undefined); // Output: "undefined"
console.log(typeof NaN); // Output: "number"
console.log(typeof fruits + "Array"); // Output: object
console.log(typeof person + "object"); // Output: object
console.log(typeof fun + "function"); // Output: function

// To check if a value is NaN, use the isNaN() function
console.log(isNaN(NaN)); // Output: true
