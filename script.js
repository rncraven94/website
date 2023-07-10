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

/////////////////////////////////////////////////////////////////////////
// smooth scrolling section

//learn section
const btnScrollToLearn = document.querySelector(".learn-about-me");
const bio = document.querySelector("#Learn");

//project section
const btnScrollToProject = document.querySelector(".project");
const projSection = document.querySelector("#Project");
//contact section
const btnScrollToContact = document.querySelector(".contact-tab");
const contactSection = document.querySelector("#Contact");
//backtotop
const btnReturn = document.querySelector(".return");
const returnSection = document.querySelector("#return");

btnScrollToLearn.addEventListener("click", function (e) {
  e.preventDefault();
  const s1coords = bio.getBoundingClientRect();
  window.scrollTo({
    left: s1coords + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

btnScrollToProject.addEventListener("click", function (e) {
  e.preventDefault();
  const s2coords = projSection.getBoundingClientRect();
  window.scrollTo({
    left: s2coords + window.pageXOffset,
    top: s2coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

btnScrollToContact.addEventListener("click", function (e) {
  e.preventDefault();
  const s3coords = contactSection.getBoundingClientRect();
  window.scrollTo({
    left: s3coords + window.pageXOffset,
    top: s3coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

btnReturn.addEventListener("click", function (e) {
  e.preventDefault();
  const s4coords = returnSection.getBoundingClientRect();
  window.scrollTo({
    left: s4coords + window.pageXOffset,
    top: s4coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});
