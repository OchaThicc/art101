// index.js - Lab 6: Arrays and Objects
// Author: Sean Lee 
// Date: 10/23/2024

//Define Variables
var myTransport = ["bus", " car", " bike"];

//Object containing my car
var myMainRide = {
  make: "Subaru",
  model: "CrossTrek",
  color: "black",
  year: 2016,
  ownIt: true,
  age: function(){
      return 2024 - this.year
  }
}

document.writeln("I use these to get around: " + myTransport + "<br><br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


document.writeln("- My car is " + myMainRide.age() + " years old.");
