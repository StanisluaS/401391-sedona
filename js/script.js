'use strict';

(function () {

  var searchHotel = document.querySelector('.search-hotel');
  var searchForm = searchHotel.querySelector('.search-hotel-form');
  var btnSearchHotel = searchHotel.querySelector('.btn-search-hotel');
  var inputs = searchForm.querySelectorAll('input');
  var calendar = null;

//открытие закрытие формы бронирования гостиницы
  var openForm = function (evt) {
    evt.preventDefault();
    searchForm.classList.add('open-form');
    btnSearchHotel.removeEventListener('click', openForm);
    btnSearchHotel.removeEventListener('keydown', pressKey);
    btnSearchHotel.addEventListener('click', closeForm);
    document.addEventListener('keydown', pressKey);
  };

  var closeForm = function (evt) {
    evt.preventDefault();
    calendar = searchForm.querySelector('.open-calendar');
    searchForm.classList.remove('open-form');
    searchForm.classList.remove('form-error');
    btnSearchHotel.addEventListener('click', openForm);
    btnSearchHotel.addEventListener('keydown', pressKey);
    btnSearchHotel.removeEventListener('click', closeForm);
    document.removeEventListener('keydown', pressKey);
    if(calendar) {
      calendar.classList.remove('open-calendar');
    }
  };

  var pressKey = function (evt) {
    if (evt.keyCode === 13 && !searchForm.classList.contains('open-form')) {
      evt.preventDefault();
      openForm(evt);
    } else if (evt.keyCode === 27 && searchForm.classList.contains('open-form')) {
      evt.preventDefault();
      closeForm(evt);
    }
  };

//проверка на валидность формы
  var makeCheck = function (evt) {
    [].forEach.call(inputs, function(el) {
      if (!el.value) {
        evt.preventDefault();
        el.classList.add('input-error');
        var widthSearchFormk = searchForm.offsetWidth;
        searchForm.classList.remove('form-error');
        widthSearchFormk = searchForm.offsetWidth;
        searchForm.classList.add('form-error');
      }
    });
  };

  var removeOutline = function (evt) {
    var target = evt.target;
    target.classList.remove('input-error');
  };

  btnSearchHotel.addEventListener('click', openForm);
  btnSearchHotel.addEventListener('keydown', pressKey);
  searchForm.addEventListener('submit', makeCheck);
  [].forEach.call(inputs, function(el) {
    el.addEventListener('input', removeOutline)
  })

})();
