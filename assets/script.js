$(function () {


  // Event listener for save button to store items in local storage
  var saveBtn = $('.saveBtn');

  saveBtn.on('click', function (event) {
    event.preventDefault();
    var hourX = $(this).parent().attr('id');
    var todoInput = $(this).parent().children().eq(1).val();
    localStorage.setItem(hourX, todoInput);
  })


  // code to update current time/date dynamically and display past/present/future time block colors
  function hourUpdater() {
    var currentHour = dayjs().hour();
    console.log(currentHour);

    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present')
      } else if (blockHour > currentHour) {
        $(this).removeClass('past present').addClass('future')
      }
    })


  };

  hourUpdater();
  setInterval(hourUpdater, 15000);


  // code that persists todo item in appropriate time block
  $('.time-block').each(function () {
    var storageKey = $(this).attr('id');
    var displayValue = localStorage.getItem(storageKey);
    if (storageKey === $(this).attr('id')) {
      $(this).children().eq(1).text(displayValue);
    }
  })


  // code to display current date and time at top of application
  var dateNow = dayjs().format('dddd MMM D, YYYY hh:mm:ssA');
  setInterval(function () {
    var dateNow = dayjs().format('dddd MMM D, YYYY hh:mm:ssA');
    $('#currentDay').text(`Today is ${dateNow}`);
  }, 1000)
  $('#currentDay').text(`Today is ${dateNow}`);
});