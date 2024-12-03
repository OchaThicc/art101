/*
   lab.js - Returns a XKCD comic when button is hit
   Requirements: jQuery must be loaded for this script to work.

   Author: Sean Lee
   Date: 12/2/2024
*/

// Using the core $.ajax() method
function comic() {
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
        

        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            // do stuff
            $("#currentimage").attr("src", data.img);
            $("#currentimage").attr("alt", data.alt);

        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error: cors isn't working, comic not loading", textStatus, errorThrown);
            $("#output").html("Comic isn't working, Cors issue")

        }
    })
}

//Click listener
$("#activate").click(function(){
    comic();
});