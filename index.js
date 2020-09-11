// return the greatest common divisor from 1 to 12.

function greatestDivisor(num1, num2) {
   if (num1 % 12 == 0 && num2 % 12 == 0 ) {
    return "Greatest Common Divisor is 12" ;
   }
   else if (num1 % 11 == 0 && num2 % 11 == 0 ) {
    return "Greatest Common Divisor is 11" ;
   }
   else if (num1 % 10 == 0 && num2 % 10 == 0 ) {
    return "Greatest Common Divisor is 10" ;
   }
   else if (num1 % 9 == 0 && num2 % 9 == 0 ) {
    return "Greatest Common Divisor is 9" ;
   }
   else if (num1 % 8 == 0 && num2 % 8 == 0 ) {
    return "Greatest Common Divisor is 8" ;
   }
   else if (num1 % 7 == 0 && num2 % 7 == 0 ) {
    return "Greatest Common Divisor is 7" ;
   }
   else if (num1 % 6 == 0 && num2 % 6 == 0 ) {
    return "Greatest Common Divisor is 6" ;
   }
   else if (num1 % 5 == 0 && num2 % 5 == 0 ) {
    return "Greatest Common Divisor is 5" ;
   }
   else if (num1 % 4 == 0 && num2 % 4 == 0 ) {
    return "Greatest Common Divisor is 4" ;
   }
   else if (num1 % 3 == 0 && num2 % 3 == 0 ) {
    return "Greatest Common Divisor is 3" ;
   }
   else if (num1 % 2 == 0 && num2 % 2 == 0 ) {
    return "Greatest Common Divisor is 2" ;
   }
   else if (num1 % 1 == 0 && num2 % 1 == 0 ) {
    return "Greatest Common Divisor is 1" ;
   }
   else {
       return "Number 1 and number 2 do not have any common divisors"
   }

};

console.log(greatestDivisor(24, 96));
// returns 12