// Carousel container Next/previous controls
var scrollPerClick;
var scrollAmount = 0;
var ImagePadding = 20;

scrollPerClick = document.querySelector(".img").clientWidth + ImagePadding;

function sliderScrollLeft(slider_id) {
  sliders = document.querySelector(slider_id);
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if(scrollAmount < 0) {
    scrollAmount = 0
  }
}

function sliderScrollRight(slider_id) {
  sliders = document.querySelector(slider_id);
  if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    })
  }
}

// When the user scrolls down, nav bar background color turns black
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY) {
    nav.classList.add('nav_black')
  } else {
    nav.classList.remove('nav_black');
  }
});

