// index.js - Lab 8: Functions
// Author: Sean Lee 
// Date: 10/30/2024

//calculatorNumbers stores my array
var calculatorNumbers = [0,1,2,3,4,5,6,7,8,9];
console.log("Array: ", calculatorNumbers)

//Squares the inputted number
function squared(x){
    var results = x * x;
    return results;
}

//squares the array numbers
console.log("Squared array:", calculatorNumbers.map(squared));

//callback function that returns array numbers + 1
calculatorNumbers.map(function(x){
    return x + 1;
})

console.log("Returns the array with a increment of 1:", calculatorNumbers.map(function(x){
    return x + 1;
}))

var Increment1 = calculatorNumbers.map(function(x){
    return x + 1;
})

//Store the modified array map 
var mapResults = calculatorNumbers.map(squared);

//Prints the stored array with a message
console.log("Results: ", mapResults);

$("#output1").html("Array: " + calculatorNumbers);
$("#output2").html("Squared numbers: " + mapResults);
$("#output3").html("Incremented " + Increment1);