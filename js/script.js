// Get the modal
var modal = document.getElementById("best_movie_modal");

// Get the button that opens the modal
var btn = document.getElementById("best_movie_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal_close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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