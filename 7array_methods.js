// my code start from here
//array methods

let newarray = [0, 1, 2, 3, 4, 5]
let _newarray = [6, 7, 8, 9]
// let join = newarray.join(_newarray)
newarray.push(3)
newarray.pop()
newarray.shift()
newarray.unshift(1)
newarray

console.log(newarray);
console.log(newarray.includes(7));
console.log(newarray.indexOf(19));
// console.log(join);

const myn1 = newarray.slice(1, 3)//not change orignal array
console.log("A", myn1);
const myn2 = newarray.splice(1, 3)//change orignal array
console.log("B", myn2);
const myn3 = newarray
console.log("C", myn3);

// using concat method
let myarr1 = ["thor", "flash", "ironman"]
let myarr2 = ["superman", "aquaman"]
// let allhero = myarr1.concat(myarr2) 
// console.log(allhero);
// using spread method
// const newheroes = [...myarr1,...myarr2]
// console.log(newheroes);
//marge all arrays in arrays
let merge_array = ["aaaaa", "aaass", ["aaaaa", ["asddsds", "saddfsd"]]]
let flatarray = merge_array.flat(Infinity)
console.log(flatarray);

console.log(Array.isArray("arba"))
console.log(Array.isArray(flatarray))//tell is it is array
console.log(Array.from("arnaz"))////it change written value into array
console.log(Array.of("arnaz"))//it create a new array
let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1, sc2, sc3))//it create a new array
// console.log(Array.from(myarr1,myarr2))//it did not change allready cheated arrays 