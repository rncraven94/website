use: "strict";

// console.log("hi");

///////////////////
// sliders

const slides = document.querySelectorAll(".book");
const btnLeft = document.querySelector(".slider_btn-left");
const btnRight = document.querySelector(".slider_btn-right");
let curSlide = 0;
const maxSlide = slides.length;
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

// going to the next slide
btnRight.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});
