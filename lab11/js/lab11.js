/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Sean Lee
   Date: 11/11/2024
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}


// Appends random end of sentence
function random() {

   let endsent = "";
   
   const randomNumber = Math.floor(Math.random() * 3) + 1;


   if (randomNumber == 1) {
      // Code to execute if condition is 1
      endsent = "is currently in America";  
   } 

   else if (randomNumber == 2){
      // Code to exectute if condition is 2
      endsent = "is not your name";
   } 

   else {
      // Code to execute if condition is 3 "Darkest Dungeon reference"
      endsent = "is aware of the infinite malignity of the stars";
   }

  return endsent;
}



// click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    
    const endsentence = random();

    // now let's sort it
    const userNameSorted = sortString(userName);

    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + " " +endsentence + '</p></div>');
});





