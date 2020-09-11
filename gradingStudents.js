
//Promt a user for an itenger and return the grade associated with that integer.
const readline = require("readline");
const studentGrade = readline.createInterface({
    input: process.stdin,    
    output: process.stdout
});
studentGrade.question("Please enter a student's grade (as a number): ", function(grade) {
    if (grade >= 90) {
        console.log("A 🙂🤓🥳");
    }
    else if (grade >= 80 && grade < 90) {
       console.log("B 🙂");
   }
   else if (grade >= 70 && grade < 80) {
       console.log("C 😐");
   }
   else if (grade >= 60 && grade < 70) {
       console.log("D 😫");
   }
   else if (grade < 60) {
       console.log("F 😥");
   }
   studentGrade.close();
   
   
});
