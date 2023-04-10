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

