// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

var saveBtn = $('.saveBtn');

saveBtn.on('click', function(event) {
  event.preventDefault();
  var hourX = $(this).parent().attr('id');
  var todoInput = $(this).parent().eq(1).val();
  localStorage.setItem(hourX, todoInput);
})

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentHour = dayjs().format('h');
  console.log(currentHour);
  if (currentHour === '9') {
    $('#hour-9').addClass('present');
    $('#hour-10').addClass('future');
    $('#hour-11').addClass('future');
    $('#hour-12').addClass('future');
    $('#hour-13').addClass('future');
    $('#hour-14').addClass('future');
    $('#hour-15').addClass('future');
    $('#hour-16').addClass('future');
    $('#hour-17').addClass('future');
  }
  if (currentHour === '10') {
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('present');
    $('#hour-11').addClass('future');
    $('#hour-12').addClass('future');
    $('#hour-13').addClass('future');
    $('#hour-14').addClass('future');
    $('#hour-15').addClass('future');
    $('#hour-16').addClass('future');
    $('#hour-17').addClass('future');
  }
  if (currentHour === '11') {
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').addClass('present');
    $('#hour-12').addClass('future');
    $('#hour-13').addClass('future');
    $('#hour-14').addClass('future');
    $('#hour-15').addClass('future');
    $('#hour-16').addClass('future');
    $('#hour-17').addClass('future');
  }
  if (currentHour === '12') {
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').addClass('past');
    $('#hour-12').addClass('present');
    $('#hour-13').addClass('future');
    $('#hour-14').addClass('future');
    $('#hour-15').addClass('future');
    $('#hour-16').addClass('future');
    $('#hour-17').addClass('future');
  }




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var dateNow = dayjs().format('dddd MMM D, YYYY');
  $('#currentDay').text(`Today is ${dateNow}`);

});