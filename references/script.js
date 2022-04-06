
// grab relevant elements
let headerMain = document.querySelector(".headerMain");


let headerJumbo = document.createElement("div");
headerBootstrapComponent = `<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">Project Planner Pro</h1><p class="lead">This tool helps you plan projects.</p><p class="dateandtime"></p></div></div>`
headerJumbo.innerHTML = headerBootstrapComponent;
headerMain.appendChild(headerJumbo);


let datetimeContainer = document.querySelector(".dateandtime");
displayTime();

function displayTime() {
    var currentDateTime = moment().format("MMM Do, YYYY [at] hh:mm:ss");
    datetimeContainer.innerText = currentDateTime;
}




datetimeContainer.appendChild(dateContainer);
datetimeContainer.appendChild(timeContainer);




$( function() {
    $( "#datepicker" ).datepicker();
  } );







// make time update continuously live with current time
// function setTime() {
//     // timer starts
//     timerContainer.innerText = timerInSeconds;  
//       // Sets interval in variable
//       var timerInterval = setInterval(function() {
//           timerInSeconds--;
//           timerContainer.innerText = timerInSeconds;
//         if(timerInSeconds <= 0) {
//           // Stops execution of action at set interval
//           clearInterval(timerInterval);
//           // Calls function to change display on page
//           endGame();
//         }
//       }, 1000);
//     }