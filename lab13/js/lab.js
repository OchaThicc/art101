/*
   lab.js - Prints Fizz Buzz Boom depending on if the multiple of the number is 3 5 or 7

   Requirements: jQuery must be loaded for this script to work.

   Author: Sean Lee
   Date: 11/13/2024
*/


function fizzbuzz(){
   let fizzle = ""

   for (let i = 0; i<=200; i++){
      let result = "";

      //And operators help to distinguish what is multiples of 3 5 and 7 as well as multiples of all other combinations. 
      if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
         result += "FizzBuzzBoom";
     } else if (i % 3 === 0 && i % 5 === 0) {
         result += "FizzBuzz";
     } else if (i % 3 === 0 && i % 7 === 0) {
         result += "FizzBoom";
     } else if (i % 5 === 0 && i % 7 === 0) {
         result += "BuzzBoom";
     } else if (i % 3 === 0) {
         result += "Fizz";
     } else if (i % 5 === 0) {
         result += "Buzz";
     } else if (i % 7 === 0) {
         result += "Boom";
     }
      
     //Appends each result to the output with their original number, chatgpt helped with the 4 columns css
      fizzle += `<div>${i}${result ? ` ${result}` : ""}</div>`;
   }

   //Prints out the final string. 
   $("#output").html(fizzle);
}

