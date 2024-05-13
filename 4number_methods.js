// my written code
// Numbers

const score = 300
const newscore = 300.12112
const newscor = 3000000

const newnumbver = new Number(400)

console.log(newnumbver)
console.log(score.toString())
console.log(newscore.toFixed(2))
console.log(newscore.toPrecision(4))
console.log(newscor.toLocaleString("en-IN"))


// Ai written code
// Number methods

// toString() - converts a number to a string
let num = 123;
console.log(num.toString()); // Output: "123"

// toFixed() - returns a string representing the number with a specified number of decimal places
let pi = 3.14159;
console.log(pi.toFixed(2)); // Output: "3.14"

// parseInt() - parses a string and returns an integer
let str = "42";
console.log(parseInt(str)); // Output: 42

// parseFloat() - parses a string and returns a floating-point number
let strFloat = "3.14";
console.log(parseFloat(strFloat)); // Output: 3.14

// isNaN() - determines whether a value is NaN (Not a Number)
let notANumber = NaN;
console.log(isNaN(notANumber)); // Output: true

// isFinite() - determines whether a value is a finite number
let finiteNum = 42;
let infiniteNum = Infinity;
console.log(isFinite(finiteNum)); // Output: true
console.log(isFinite(infiniteNum)); // Output: false