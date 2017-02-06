var sliderList = document.getElementById('slider-ul');
var leftArrow = document.querySelector('.slider-left-arrow');
var rightArrow = document.querySelector('.slider-right-arrow');
var slide = document.querySelector('.slider-item');
var widthSlide = 0;
var position = 0;

//событие на нажатие стрелки влево
leftArrow.addEventListener("click", function(event) {
  event.preventDefault();

  //находим элементы первого и последнего слайда
  var firstSlide = sliderList.childNodes[1];
  var delSlide = sliderList.childNodes[3];

  //вставляем вперед последний слайд, удаляя при этом его
  sliderList.insertBefore(delSlide, firstSlide);
});

rightArrow.addEventListener("click", function(event, copySlide) {
  event.preventDefault();

  //находим первый элемент
  var delSlide = sliderList.childNodes[1];

  //вставляем первый слайд в конец
  sliderList.appendChild(delSlide);
});
