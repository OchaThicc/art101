// index.js - Lab 7: Functions
// Author: Sean Lee 
// Date: 10/28/2024

//function SortUser sorts the username inputted
function SortUser(username) {
    var username = window.prompt("Please type in your name so I can sort it: "); 
    console.log("userName =", username);
    //splits the string into an array first
    //then sorts the array
    //finally joins the array into a string
    var newUser = username.split('').sort().join('');
    console.log(newUser);
    return newUser;
}

//output
document.writeln("Oh hey, I've sorted your name: ", SortUser(),"</br>" );