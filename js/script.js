'use strict';

(function () {

  var searchHotel = document.querySelector('.search-hotel');
  var searchForm = searchHotel.querySelector('.search-hotel-form');
  var btnSearchHotel = searchHotel.querySelector('.btn-search-hotel');
  var inputs = searchForm.querySelectorAll('input');

//открытие закрытие формы бронирования гостиницы
  var openForm = function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle('open-form');
    searchForm.classList.remove('form-error');
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
  searchForm.addEventListener('submit', makeCheck);
  [].forEach.call(inputs, function(el) {
    el.addEventListener('input', removeOutline)
  })

})();
