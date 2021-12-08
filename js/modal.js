// Get the best movie modal
var movieModal = document.getElementById("movie_modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal_close")[0];

// When the user clicks on the button, open the modal
function openModal(movie_url) {
  movieModal.style.display = "block";
  showMovieData(movie_url);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  movieModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == movieModal) {
    movieModal.style.display = "none";
  }
}