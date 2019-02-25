'use strict';

(function () {

  var form = document.querySelector('.search-hotel-form');
  var person = document.getElementById('person');
  var children = document.getElementById('children');
  var btnPerson = form.querySelectorAll('.btn-person');
  var btnChildren = form.querySelectorAll('.btn-children');

  //задает количество гостей
  var makeAmountPeople = function (evt) {
    evt.preventDefault();
    var target = evt.target;
    var input = target.parentElement.querySelector('input');
    if(target.classList.contains('btn-add')) {
      input.value ++ ;
    } else if (target.classList.contains('btn-subtract')) {
      input.value -- ;
      if(input.value < 0) {
        input.value = 0;
      }
    }
  }

  //запрет на ввод букв в инпуты выбора количества гостей
  var makeInputBan = function(evt) {
    if((evt.keyCode < 48 || evt.keyCode > 57) && (evt.keyCode < 96 || evt.keyCode > 105) && evt.keyCode !== 8 && evt.keyCode !== 13 && evt.keyCode !== 27 && evt.keyCode !== 37 && evt.keyCode !== 39 && evt.keyCode !== 46) {
      evt.preventDefault();
    }
  };

  [].forEach.call(btnPerson, function (el) {
    el.addEventListener('click', makeAmountPeople);
  });
  [].forEach.call(btnChildren, function (el) {
    el.addEventListener('click', makeAmountPeople);
  });
  person.addEventListener('keydown', makeInputBan);
  children.addEventListener('keydown', makeInputBan);

})();
