
  var sliderList = document.getElementById('slider-ul');
  var leftArrow = document.querySelector('.slider-left-arrow');
  var rightArrow = document.querySelector('.slider-right-arrow');
  var slide = document.querySelector('.slider-item');
  var widthSlide = slide.clientWidth;
  var position = 0;

  console.log(widthSlide);

  leftArrow.addEventListener("click", function(event) {
    event.preventDefault();
    margin = window.getComputedStyle(sliderList).marginLeft;
    position = Number(margin.substring(0,margin.length-2));
    console.log(position);
    position =  position + widthSlide;
    sliderList.style.marginLeft = position + 'px';
    console.log(position + 'px');
    position = 0;
  });

  rightArrow.addEventListener("click", function(event) {
    event.preventDefault();
    margin = window.getComputedStyle(sliderList).marginLeft;
    position = Number(margin.substring(0,margin.length-2));
    console.log(position);
    position =  position - widthSlide;
    sliderList.style.marginLeft = position + 'px';
    console.log(position + 'px');
    position = 0;
  });
