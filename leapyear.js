// Prompt a user for a year and return whether or not it was a gregorian leap year

// const low = 1582;
// const high = 2020;

// let list = [];
// for (var i = low; i <= high; i++ ) {
//     if (i % 4 == 0 && i % 100 != 0) {
//     list.push(i); 
//     }
//     else if (i % 400 == 0) {
//     list.push(i);
//     }
// }

// console.log(list);
//returns list of all gregorian leap years


const readline = require("readline");
const yearQuestion = readline.createInterface({
    input: process.stdin,    
    output: process.stdout
});
yearQuestion.question("What year would you like to check? ", function(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log(`The year ${year} was a leap year.`) 
        }
    else if (year % 400 == 0) {
        console.log(`The year ${year} was a leap year.`)
        }

    else {
        console.log(`The year ${year} was not a leap year`)
    }
    
    yearQuestion.close();
   
   
});