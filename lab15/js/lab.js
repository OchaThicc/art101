/*
   lab.js - Upon button click, use jQuery Ajax to fetch output from API
   Requirements: jQuery must be loaded for this script to work.

   Author: Sean Lee
   Date: 11/25/2024
*/


// Using the core $.ajax() method
function fetchYesNoAPI() {
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://yesno.wtf/api#",
        // The data to send (will be converted to a query string)
        data: { 
                // here is where any data required by the api 
                //   goes (check the api docs)
                id: 123,
                api_key: "blahblahblah",
            },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            //Set image from data
            $("#yesnogif").attr("src", data.image);
            //show answer
            $("#answermaxxing").text(data.answer);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

$("#activate").click(function(){
    fetchYesNoAPI();
});