'use strict';

(function () {

  var DIFFERENCE = 71;
  var form = document.querySelector('.search-hotel-form');
  var inputs = form.querySelectorAll('input');
  var btnSearchDate = form.querySelectorAll('.btn-search-date');
  var arrival = form.querySelector('.arrival');
  var departure = form.querySelector('.departure');

  //получение текущей даты для инпутов
  var getDate = function(difference) {
    difference = difference || 0;
    var arrayMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    var todayDay = new Date;
    todayDay.setDate(todayDay.getDate() + difference);
    var day = todayDay.getDate();
    var month = arrayMonth[todayDay.getMonth()];
    var year = todayDay.getFullYear();

    return day + ' ' + month + ' ' + year;
  };

//установка атрибутов в инпуты формы
  var fieldsForm = function(arrayInputs) {
    [].forEach.call(arrayInputs, function(el) {
      switch (el.name) {
        case 'arrival':
          el.setAttribute('value', getDate());
          break;
        case 'departure':
          el.setAttribute('value', getDate(DIFFERENCE));
          break;
        case 'person':
          el.type = 'text'
          el.pattern = '[0-9]{1,100}';
          break;
        case 'children':
          el.type = 'text'
          el.pattern = '[0-9]{1,100}';
          break;
      }
    });
  };

//получение даты для календаря
  var makeDate = function (numberMonth, year) {
    var date = new Date;
    if(numberMonth !== 0) {
      numberMonth = numberMonth || date.getMonth();
    }
    // year = year || date.getFullYear();
    var arrayMonth = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    return {
      year: year || date.getFullYear(),
      nameMonth: arrayMonth[numberMonth],
      date: function () {
        var todayDate;
        if((this.year === date.getFullYear()) && (numberMonth === date.getMonth())) {
          todayDate = date.getDate()
        }
        return todayDate;
      },
      firstDay: function () {
        var newDay = new Date(this.year, numberMonth, 1);
        return newDay.getDay() ? newDay.getDay() : 7;
      },
      amountDays: function () {
        var amount = new Date(this.year, numberMonth, 33);
        return 33 - amount.getDate();
      },
      amountWeek: function () {
        var newDate = new Date(this.year, (numberMonth + 1), 0);
        return Math.ceil( (newDate.getDate() - (newDate.getDay() ? newDate.getDay() : 7)) / 7 ) + 1;
      }
    };
  };

  window.makeCalendar = function (month, year) {
    var mark = false;
    var day = 1;
    var calendar = document.querySelector('#caledar-template').content.cloneNode(true);
    var calendarDay = calendar.querySelector('.calendar-day');
    var nameMonth = calendar.querySelector('.calendar-month');
    var calendarYear = calendar.querySelector('.calendar-year');

    nameMonth.textContent = makeDate(month, year).nameMonth;
    calendarYear.textContent = makeDate(month, year).year;
    for(var i = 1; i <= makeDate(month, year).amountWeek(); i++) {
      var tableRow = document.createElement('tr');
      for(var j = 1; j <= 7; j++) {
        var tableData = document.createElement('td');
        if(j === makeDate(month, year).firstDay()) {
          mark = true;
        }
        if (mark && day <= makeDate(month, year).amountDays()) {
          tableData.classList.add('date');
          tableData.textContent = day;
          if(day === makeDate(month, year).date()) {
            tableData.classList.add('today-date');
          }
          day++;
        }
        tableRow.appendChild(tableData);
      }
      calendarDay.appendChild(tableRow);
    }

    return calendar;
  };

  var addCalendar = function(element) {
    element.appendChild(window.makeCalendar());
  };

  fieldsForm(inputs);
  addCalendar(arrival);
  addCalendar(departure);

})();
