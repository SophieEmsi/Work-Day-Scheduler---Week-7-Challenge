var todayDate = moment().format('MMMM Do YYYY');

// document.getElementById('currentDay').innerHTML = todayDate; // i wrote the code firstly in the long js script

$('#currentDay').html(todayDate); // and then converted it to jsquery


function checkTime() { // new function to check the time and display the correct colours in the time block
    var currentTime = moment().hours(); // using moment.js to get the current time in hours format and store it in a variable called currentTime

    $(".time-block").each(function() { // selecting all class elements called time-block and then running them through the statements below.

        var timeBlockHour = parseInt($(this).attr("id")); // takes the id of the time block (by parsing the string to a whole number) which is the hour of day and stores it as a variable called timeBlockHour
    
  
        if (timeBlockHour < currentTime) { //if the time of the id is greater than the current time provided by moment.js 
         $(this).addClass("past"); // add class past and change colour according to css
        } else if (timeBlockHour === currentTime) { // if time of the id is the same as current time provided by moment.js
        $(this).addClass("present"); // add class present and change colour according to css
        } else { // if neither of these 
        $(this).addClass("future"); // add class future and change colour according to css
         }
    });
    }
  
 // colours are still not displaying in the time blocks


 $(document).ready(function() { // once the browser is ready it executes the function
    
    var timeBlocks = $(".time-block"); // selects all html elements with a class of time-block and saves them as a variable called timeBlocks
  
 
    timeBlocks.each(function() { // loops through each time-block element saved as timeBlocks
    
      checkTime($(this)); // calls function called checkTime defined above which runs through the if,else conditions
    });
  });

// saving the text input to local storage

$(document).ready(function(){ // execure new function when browser is ready

    $(".time-block").each(function() { // select all the class elements called time-block and run through each in a new function 
        var rowId = $(this).attr('id'); // take value of id and assign it to the rowId variable
        var savedText = localStorage.getItem("savedText-" + rowId); //get item from the local storage by concatenating the savedText and rowId. This makes sure the unique id of the time-blow element is used to stop repeating.
        if (savedText) { // if there is anything in local storage assign it to savedText
            $(this).find(".description").val(savedText); //if savedText does have a value it is used to set the value of .description from html
        }
    });

    $(".save-button").click(function(){ // select the class save-button and fun a new function when button is clicked
        var textInput = $(this).siblings(".description").val(); // gets value of the class .description field in html
        var rowId = $(this).closest('.time-block').attr('id'); // finds the closest element to the description with an id of time-block
        localStorage.setItem("savedText-" + rowId, textInput); // uses this id to create a unique key to store input value in local storage and saves the text as savedText
    });

});


//when i refreshed my page the text was being wiped so I need to modify it to retreive the information stored in the local storage and display it on the page
// i checked the local storage and my text doesn't seem to be saving
// i have managed to save the text to the local storage but now when i refresh the text copies across to all other boxes