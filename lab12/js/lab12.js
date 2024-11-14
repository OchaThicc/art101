/*
   lab12.js - Grabs your names string length and returns your "house" from harrry potter

   Requirements: jQuery must be loaded for this script to work.

   Author: Sean Lee
   Date: 11/13/2024
*/

//declared outside so its accesible globaly
var selectedHouse = 0;

// Get the dropdown element
var houseSelection = document.getElementById("houseSelection");

// Add an event listener for changes in the dropdown
houseSelection.addEventListener("change", function(){
   // Get the selected value
   selectedHouse = parseInt(houseSelection.value); 
});


function sortinghat(str){
   //gets the length of the string
   len = str.length

   //returns a modulus
   modified = (len + selectedHouse) % 4;

   //conditionals for your house
   if (modified == 0){
      return "Gryffindor"
   }
   else if (modified == 1){
      return "Hufflepuff"
   }
   else if (modified == 2){
      return "Slytherin"
   }
   else if (modified == 3){
      return "RavenClaw"
   }
}


//button listener
var submissionbutton = document.getElementById("button");
submissionbutton.addEventListener('click', function(){
   var name = document.getElementById('input').value;
   var house = sortinghat(name);
   designation = "<p>The sorting hat has turned you into a " + house + "</p>";
   document.getElementById('output').innerHTML= designation;
})

