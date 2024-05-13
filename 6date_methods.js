// my coding strat from here

// dates mathed



let newdate = new Date()
// console.log(newdate)
// console.log(newdate.toString())
// console.log(newdate.toDateString())
// console.log(newdate.toLocaleDateString())
// console.log(newdate.toLocaleTimeString())
// console.log(newdate.getTime())
// console.log(newdate.toTimeString())
// console.log(newdate.toUTCString())

// const mycreateddate = new Date(2024, 3, 25)
// -------------------------------------------- year,month,day
// const mycreateddate = new Date("1-13-2024")
// ---------------------------------------------month,day,year
const mycreateddate = new Date("2024-1-22")
// ---------------------------------------------year,month,day
// console.log(mycreateddate.toLocaleString())
console.log(mycreateddate.getTime())
const mytimestamp = Date.now()
console.log(mytimestamp)
// to change millisecond in second
/* // change seconds to minutes is converting the number of seconds to the equivalent number of
minutes. This can be done by dividing the number of seconds by 60, since there are 60 seconds in a
minute. */
console.log(Math.floor(mytimestamp / 1000))
// change seconds to minutes divide milliseconds to 60 
console.log(newdate.getDate());
console.log(newdate.getMonth() + 1);//give month in indexvalue
console.log(newdate.getFullYear());
console.log(newdate.getHours());
console.log(newdate.getSeconds());

// Ai code 

const now = new Date();

// Get the current year
const year = now.getFullYear();

// Get the current month (0-11)
const month = now.getMonth();

// Get the current date (1-31)
const date = now.getDate();

// Get the current day of the week (0-6, where 0 is Sunday)
const day = now.getDay();

// Get the current hour (0-23)
const hour = now.getHours();

// Get the current minute (0-59)
const minute = now.getMinutes();

// Get the current second (0-59)
const second = now.getSeconds();

// Get the current millisecond (0-999)
const millisecond = now.getMilliseconds();

// Get the current time zone offset in minutes
const timezoneOffset = now.getTimezoneOffset();

// Get the current date and time as a string
const dateString = now.toString();

// Get the current date and time in UTC format
const utcString = now.toUTCString();

// Get the current date and time in ISO format
const isoString = now.toISOString();