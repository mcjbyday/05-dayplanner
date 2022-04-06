// TO DO
// WHEN I scroll down
    // THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
    // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
    // THEN I can enter an event
// WHEN I click the save button for that timeblock
    // THEN the text for that event is saved in local storage
// WHEN I refresh the page
    // THEN the saved events persist

// DONE 
// THEN the current day is displayed at the top of the calendar


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

let timeBlockContainer = $('.container');


// make elements
for (i=9;i<19;i++) {
var hourWindow = $(`<div class="row col-12"><div class="time-block col-2" data-hour="${i}"></div><textarea class="col-9"></textarea><button class="saveBtn col-1"><i class="fas fa-save"></i></button></div>`);

}
// adjust value of elements
var hourWindowStatus = $('div[data-hour=""]').val();



// document.querySelector("textarea[data-hour="9"]")


// past
// present
// future



// /Users/michaeljacobs/Documents/000-000-000_Work/00-Class/repos/NU-VIRT-FSF-FT-03-2022-U-LOL/05-Third-Party-APIs/01-Activities/10-Stu_Event-Delegation/Solved/assets/js/script.js
// var shoppingFormEl = $('#shopping-form');
// var shoppingListEl = $('#shopping-list');

// function handleFormSubmit(event) {
//   event.preventDefault();

//   var shoppingItem = $('input[name="shopping-input"]').val();

//   if (!shoppingItem) {
//     console.log('No shopping item filled out in form!');
//     return;
//   }

//   var shoppingListItemEl = $(
//     '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
//   );
//   shoppingListItemEl.text(shoppingItem);

//   // add delete button to remove shopping list item
//   shoppingListItemEl.append(
//     '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
//   );

//   // print to the page
//   shoppingListEl.append(shoppingListItemEl);

//   // clear the form input element
//   $('input[name="shopping-input"]').val('');
// }

// function handleRemoveItem(event) {
//   // convert button we pressed (`event.target`) to a jQuery DOM object
//   var btnClicked = $(event.target);

//   // get the parent `<li>` element from the button we pressed and remove it
//   btnClicked.parent('li').remove();
// }

// // use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
// shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
// shoppingFormEl.on('submit', handleFormSubmit);
