// set #currentDay as dateContainer, use Moment to set date
let dateContainer = document.querySelector("#currentDay");
var currentDate = moment().format("MMM Do, YYYY");
dateContainer.innerText = currentDate;

let timeBlockContainerEl = $('.container');
// set agenda boundaries
let hoursStart = 8;
let hoursEnd = 19;

// create, style, and append timeblock elements
for (var i = hoursStart ; i < hoursEnd ; i++) {
    var presentHour = moment().format("k");
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
    // initialize HTML formatting, using individual hour values, hourly IDs, and the particular hour relationship to decide on the block's color
    var hourBlock = $(`<div class="row col-12" data-hour="${i}" id="${i}"><div class="time-block col-2 hour">${displayTime}</div><textarea class="col-9 ${relativeTimeState} description"></textarea><button class="saveBtn col-1"><i class="fas fa-save"></i></button></div>`);
    //
    timeBlockContainerEl.append(hourBlock);
    // for a given block of id i, get the value of the description from local storage and set the value with that particular localstorage data 
    $("#" +i +" .description").val(localStorage.getItem(i));
}
// adjust value of elements
var hourWindowStatus = $('div[data-hour=""]').val();

$(document).on("click", ".saveBtn", function(){
    var note = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("data-hour");

    localStorage.setItem(hour, note);
})
