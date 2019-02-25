'use strict';

(function () {

  var searchForm = document.querySelector('.search-hotel-form');
  var dates = searchForm.querySelectorAll('.date');
  var arrayMonth = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  var inputsMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

//устанавливает дату в инпут из календаря
  window.changeDate = function (evt) {
    evt.preventDefault();
    var calendar = null;
    var month = null;
    var year = null;
    var input = null;
    var target = evt.target;
    var parent = target.parentElement;
    var date = target.textContent;

    while (true) {
      if(parent.classList.contains('calendar')) {
        calendar = parent;
      } else if (parent.classList.contains('search-hotel-item')) {
        break;
      }
      parent = parent.parentElement;
    }

    month = calendar.querySelector('.calendar-month').textContent;
    year = calendar.querySelector('.calendar-year').textContent;
    arrayMonth.forEach(function (el, number) {
      if(el === month) {
        month = inputsMonth[number];
      }
    });
    input = parent.querySelector('input');
    input.value = date + ' ' + month + ' ' + year;
    calendar.classList.remove('open-calendar');
  };

  [].forEach.call(dates, function (el) {
    el.addEventListener('click', window.changeDate);
  });

})();
