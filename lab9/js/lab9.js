/*
   lab9.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Sean
   Date: 11/4/2024
*/

//Makes all the buttons
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#Problems").append("<button id='button-Problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

//gives a click function to toggle the class special for challenge
$("#button-challenge").click(function() {
    $("#challenge").toggleClass("special");
});


//gives a click function to toggle the class special for result
$("#button-Problems").click(function() {
    $("#Problems").toggleClass("special");
});

//Initiates output with special mode off
$("#output").text("Special mode is OFF");


//gives a click function to toggle the class special for result and to display special mode on/off
$("#button-results").click(function() {
    $("#results").toggleClass("special");

    if ($("#results").hasClass("special")) {
        $("#output").text("Special mode is ON");
    } 
    else {
        $("#output").text("Special mode is OFF");
    }
});