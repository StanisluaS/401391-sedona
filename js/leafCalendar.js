'use strict';

(function () {

  var searchForm = document.querySelector('.search-hotel-form');
  var btnCalendar = searchForm.querySelectorAll('.btn-calendar');
  var arrayMonth = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

//перелистывание календаря
  var leafCalendar = function (evt) {
    evt.preventDefault();
    var newBtnCalendar = null;
    var dates = null;
    var calendar = null;
    var month = null;
    var year = null;
    var target = evt.target;
    var parent = target.parentElement;
    while (true) {
      if(parent.classList.contains('calendar')) {
        calendar = parent;
      } else if (parent.classList.contains('search-hotel-item')) {
        break;
      }
      parent = parent.parentElement;
    }
    arrayMonth.forEach(function(el,number) {
      if (el === calendar.querySelector('.calendar-month').textContent) {
        month = number;
      }
    });
    year = +calendar.querySelector('.calendar-year').textContent;
    if (target.classList.contains('btn-left')) {
      month --;
      if(month < 0) {
        month = 11;
        year --;
      }
    } else if (target.classList.contains('btn-right')) {
      month ++;
      if (month > 11) {
        month = 0;
        year ++;
      }
    }
    calendar.remove();
    parent.appendChild(window.makeCalendar(month, year));
    calendar = parent.querySelector('.calendar');
    calendar.classList.add('open-calendar');
    dates = calendar.querySelectorAll('.date');
    newBtnCalendar = calendar.querySelectorAll('.btn-calendar');
    [].forEach.call(newBtnCalendar, function (el) {
      el.addEventListener('click', leafCalendar);
    });
    [].forEach.call(dates, function (el) {
      el.addEventListener('click', window.changeDate);
    });
  };

  [].forEach.call(btnCalendar, function (el) {
    el.addEventListener('click', leafCalendar);
  });

})();
