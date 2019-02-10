'use strict';

(function () {

  var searchHotel = document.querySelector('.search-hotel');
  var searchForm = searchHotel.querySelector('.search-hotel-form');
  var btnSearchHotel = searchHotel.querySelector('.btn-search-hotel');

  var openForm = function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle('open-form');
  };

  btnSearchHotel.addEventListener('click', openForm);

})();
