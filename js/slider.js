'use strict';

var sliderList = document.getElementById('slider-ul');
var leftArrow = document.querySelector('.slider-left-arrow');
var rightArrow = document.querySelector('.slider-right-arrow');
var slide = null;

//событие на нажатие стрелки влево
leftArrow.addEventListener("click", function(event) {
  event.preventDefault();
  //ищем слайды
  slide = document.querySelectorAll('.slider-item');

  //находим элементы первого и последнего слайда
  var firstSlide = slide[0];
  var i = slide.length - 1;
  var delSlide = slide[i];

  //вставляем вперед последний слайд, удаляя при этом его
  sliderList.insertBefore(delSlide, firstSlide);
});

//событие на нажатие стрелки вправо
rightArrow.addEventListener("click", function(event, copySlide) {
  event.preventDefault();
  //ищем слайды
  slide = document.querySelectorAll('.slider-item');

  //находим первый элемент
  var delSlide = slide[0];

  //вставляем первый слайд в конец
  sliderList.appendChild(delSlide);
});
