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
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentHour = dayjs().format('h');
  console.log(currentHour);
  if (currentHour === '9') {
    $('#9').addClass('present');
    $('#10').addClass('future');
    $('#11').addClass('future');
    $('#12').addClass('future');
    $('#13').addClass('future');
    $('#14').addClass('future');
    $('#15').addClass('future');
    $('#16').addClass('future');
    $('#17').addClass('future');
  }
  if (currentHour === '10') {
    $('#9').addClass('past');
    $('#10').addClass('present');
    $('#11').addClass('future');
    $('#12').addClass('future');
    $('#13').addClass('future');
    $('#14').addClass('future');
    $('#15').addClass('future');
    $('#16').addClass('future');
    $('#17').addClass('future');
  }
  if (currentHour === '11') {
    $('#9').addClass('past');
    $('#10').addClass('past');
    $('#11').addClass('present');
    $('#12').addClass('future');
    $('#13').addClass('future');
    $('#14').addClass('future');
    $('#15').addClass('future');
    $('#16').addClass('future');
    $('#17').addClass('future');
  }
  if (currentHour === '12') {
    $('#9').addClass('past');
    $('#10').addClass('past');
    $('#11').addClass('past');
    $('#12').addClass('present');
    $('#13').addClass('future');
    $('#14').addClass('future');
    $('#15').addClass('future');
    $('#16').addClass('future');
    $('#17').addClass('future');
  }




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var dateNow = dayjs().format('dddd MMM D, YYYY');
  $('#currentDay').text(`Today is ${dateNow}`);

});