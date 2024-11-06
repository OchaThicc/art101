/*
   lab10.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Sean Lee
   Date: 11/6/2024
*/

function generateRandomText() {
   const text = "Hello everynyan, How are you, Fine thank you, Oh my god!, nihao, You have a cats tongue";
   const min = 3;
   const max = 100;
   const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
   // Get a random starting index to slice the Lorem Ipsum text
   const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
   // Generate the random Lorem Ipsum-like text
   return text.slice(randStart, randStart + randLen);
 }

 // click listener for button
$("#make-convo").click(function(){

   // get new fake dialogue
   const newText = generateRandomText();
   
   const randomNumber = Math.floor(Math.random() * 2) + 1


   if (randomNumber == 1) {
      // Code to execute if condition is true
      $("#output").append('<div class="text"><p>' + newText + '</p></div>');

  } else {
      // Code to execute if condition is false
      $("#output").append('<div class="text2"><p>' + newText + '</p></div>');
  }
      // append a new div to our output div

   //timeout the text
   setTimeout(() => {
      $('.text').remove(); 
      $('.text2').remove(); 
    }, 10000);
});

