use: "strict";

// console.log("hi");

///////////////////
// sliders

const slides = document.querySelectorAll(".book");
const btnLeft = document.querySelector(".slider_btn-left");
const btnRight = document.querySelector(".slider_btn-right");
let curSlide = 0;
const maxSlide = slides.length;
const imgHidden = document.getElementById("book-img");

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

// going to the next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
