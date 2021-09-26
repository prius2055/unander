"use strict";

/*===================================================
                HEADER
===================================================*/

const infoSmHeader = document.querySelector(".info-heading-sm");

const currentDate = new Date();

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};

const locale = navigator.language;

infoSmHeader.textContent = new Intl.DateTimeFormat(locale, options).format(
  currentDate
);

const slider = document.querySelector(".slider");
const sliderBtnLeft = document.querySelector(".slider__btn-left");
const sliderBtnRight = document.querySelector(".slider__btn-right");
const slides = document.querySelectorAll(".slide");
const navDots = document.querySelectorAll(".dot");

const numberOfSlides = slides.length;
let slideNumber = 0;

//image slider next button
sliderBtnRight.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  navDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  navDots[slideNumber].classList.add("active");
});

//image slider previous button
sliderBtnLeft.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  navDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  navDots[slideNumber].classList.add("active");
});

//image slider autoplay
let playSlider;

const repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    navDots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    navDots[slideNumber].classList.add("active");
  }, 4000);
};
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});

//SMOOTH SCROLL FOR HEADER NAVS
const headerNavs = document.querySelector(".navigation-list");

headerNavs.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navigation-link")) {
    const elementId = e.target.getAttribute("href");
    document.querySelector(elementId).scrollIntoView({ behavior: "smooth" });
  }
});

//SMOOTH SCROLL FOR DISCOVER MORE BUTTON
const btnAnimated = document.querySelector(".btn--animated");
const servicesEl = document.querySelector("#services");

btnAnimated.addEventListener("click", function (e) {
  e.preventDefault();
  servicesEl.scrollIntoView({ behavior: "smooth" });
});

//SMALL SCREEN SETUP
const hamburgerBtn = document.querySelector(".hamburger-bar");

const smallNav = document.querySelector(".nav-list-container");
hamburgerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  smallNav.classList.toggle("open-container");

  console.log("hello", hamburgerBtn);
});

/*===================================================
                SERVICES
===================================================*/
//REVEAL ON SCROLL
const allCards = document.querySelectorAll(".card");

const revealCard = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
};

const cardObserver = new IntersectionObserver(revealCard, {
  root: null,
  threshold: 0.15,
});

allCards.forEach(function (card) {
  cardObserver.observe(card);
  card.classList.add("hidden");
});
/*===================================================
                CLIENTS
===================================================*/
$(document).ready(function () {
  $("#client-list").owlCarousel({
    items: 4,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,

    //MAKING THE CAROUSEL SLIDER RESPONSIVE
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 3,
      },
      // breakpoint from 768 up
      768: {
        items: 5,
      },
      // breakpoint from 992 up
      992: {
        items: 6,
      },
    },
  });
});

/*===================================================
                BUTTON
===================================================*/

//SMOOTH SCROLL FOR BACK TO TOP BUTTON

const backToTopBtn = document.querySelector(".btn-back-to-top");

window.onscroll = function () {
  if (
    document.body.scrollTop > 1800 ||
    document.documentElement.scrollTop > 1800
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
// console.log(backToTopBtn);

backToTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.scrollIntoView({ behavior: "smooth" });
  document.documentElement.scrollIntoView({ behavior: "smooth" });
});
