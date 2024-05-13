// my written code
//  String

const hello = "ajsajddsbcjs"

console.log(hello[5])
console.log(hello.__proto__)
console.log(hello.length)
console.log(hello.toUpperCase())
console.log(hello.charAt(3))
console.log(hello.indexOf("s"))

const newstring = hello.substring(0, 6)
const newstrin = hello.slice(-6, 1)
const newstri = "            hooohoo            "
const newstr = "hoo-ohoo"

console.log(`${newstring}-${newstrin}-${newstri.trim()}-${newstr.includes("ha")} `)
console.log(newstr.split("-"))

//diffrent in slice and substring
const str = "Hello world";

// substring()
console.log(str.substring(1, 5)); // Output: "ello"
console.log(str.substring(5, 1)); // Output: "ello" (swaps indices)
console.log(str.substring(-3, 5)); // Output: "Hello" (treats -3 as 0)

// slice()
console.log(str.slice(1, 5)); // Output: "ello"
console.log(str.slice(5, 1)); // Output: "" (empty string)
console.log(str.slice(-3, 5)); // Output: "wo" (treats -3 as length 3)

// Ai written code
// String methods

// length property
const str1 = "Hello, world!";
console.log(str1.length); // Output: 13

// charAt() method
console.log(str1.charAt(0)); // Output: 'H'
console.log(str1.charAt(str1.length - 1)); // Output: '!'

// concat() method
const str2 = "Hello";
const str3 = "World";
const str4 = str2.concat(" ", str3, "!");
console.log(str4); // Output: 'Hello World!'

// includes() method
console.log(str1.includes("world")); // Output: true
console.log(str1.includes("universe")); // Output: false

// indexOf() method
console.log(str1.indexOf("world")); // Output: 7
console.log(str1.indexOf("universe")); // Output: -1

// lastIndexOf() method
const str5 = "Hello world, hello!";
console.log(str5.lastIndexOf("hello")); // Output: 14

// replace() method
const str6 = "Hello world";
const newStr = str6.replace("world", "universe");
console.log(newStr); // Output: 'Hello universe'

// slice() method
const str7 = "Hello world";
console.log(str7.slice(0, 5)); // Output: 'Hello'
console.log(str7.slice(6)); // Output: 'world'

// split() method
const str8 = "Hello,world,hello";
const arr = str8.split(",");
console.log(arr); // Output: ['Hello', 'world', 'hello']

// substring() method
const str9 = "Hello world";
console.log(str9.substring(0, 5)); // Output: 'Hello'
console.log(str9.substring(6)); // Output: 'world'

// toLowerCase() and toUpperCase() methods
const str10 = "Hello World";
console.log(str10.toLowerCase()); // Output: 'hello world'
console.log(str10.toUpperCase()); // Output: 'HELLO WORLD'

// trim() method
const str11 = "   Hello world   ";
console.log(str11.trim()); // Output: 'Hello world'

