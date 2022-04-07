// TO DO


// DONE 
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
    // THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
    // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// 
// WHEN I click into a timeblock
    // THEN I can enter an event
// WHEN I click the save button for that timeblock
    // THEN the text for that event is saved in local storage
// WHEN I refresh the page
    // THEN the saved events persist

// solve structure
// solve local storage
// store save...
// solve color sheme
// if save button is tied to a specific spot in local storage...
        // follow that pattern
// form.value
// 


// set #currentDay as dateContainer, use Moment to set date
let dateContainer = document.querySelector("#currentDay");
var currentDate = moment().format("MMM Do, YYYY");
dateContainer.innerText = currentDate;

let timeBlockContainerEl = $('.container');


// make timeblock elements
for (var i = 8 ; i < 19 ; i++) {
    var presentHour = moment().format("h");
    var relativeTimeState = "";

    // calculate the block's relative time to present for color display
    if (i < presentHour) {
        relativeTimeState = "past";
    }
    else if (i == presentHour) {
        relativeTimeState = "present";
    }
    else if (i > presentHour) {
        relativeTimeState = "future";
    }
    // set the timeblock label
    var displayTime = "";
    if (i > 12) {
        displayTime = i - 12 + " PM";
    }
    else if (i == 12) {
        displayTime = i + " PM";
    }
    else if (i < 12) {
        displayTime = i + " AM";
    }
    var hourWindow = $(`<div class="row col-12" data-hour="${i}" id="${i}"><div class="time-block col-2 hour">${displayTime}</div><textarea class="col-9 ${relativeTimeState} description"></textarea><button class="saveBtn col-1"><i class="fas fa-save"></i></button></div>`);
    

    timeBlockContainerEl.append(hourWindow);

    $("#" +i +" .description").val(localStorage.getItem(i));
}
// adjust value of elements
var hourWindowStatus = $('div[data-hour=""]').val();

$(document).on("click", ".saveBtn", function(){
    var note = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("data-hour");

    localStorage.setItem(hour, note);
})

// $("#8 .description").val(localStorage.getItem(8));

// document.querySelector("textarea[data-hour="9"]")

