'use strict';

(function () {

  var searchForm = document.querySelector('.search-hotel-form');
  var arrival = searchForm.querySelector('.arrival');
  var departure = searchForm.querySelector('.departure');
  var inputArrival = document.getElementById('arrival');
  var inputDeparture = document.getElementById('departure');

//функция открытия закрытия календаря
  var openCalendar = function (evt) {
    evt.preventDefault();
    var target = evt.target;
    var calendar = this.querySelector('.calendar');
    var openCalendar = searchForm.querySelector('.open-calendar');
    if (target.classList.contains('btn-calendar') || target.classList.contains('date')) {
      return;
    } else if (target.tagName !== 'INPUT') {
      var parent = target.parentElement;
      while (true) {
        if (parent.classList.contains('btn-search-date')) {
          break;
        } else if (parent === this) {
          return;
        }
        parent = parent.parentElement;
      }
    }
    if(openCalendar && !calendar.classList.contains('open-calendar')) {
      openCalendar.classList.remove('open-calendar');
    }
    calendar.classList.toggle('open-calendar');
  };

  arrival.addEventListener('click', openCalendar);
  departure.addEventListener('click', openCalendar);

})();
