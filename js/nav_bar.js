// When the user scrolls down, nav bar background color turns black
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY) {
    nav.classList.add('nav_black')
  } else {
    nav.classList.remove('nav_black');
  }
});