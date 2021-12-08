async function getBestMovies(category_url, category_id, start_from=0) {
  var result = await axiosUrl( 
      category_url
  );

  if (result === null) {
    return 0
  }

  var next = result.data.next;
  var movies = result.data.results;
  var movies_html = "";
  for (var i = start_from; i < 5; i++) {
      var movie = movies[i];
      movies_html += '<img class="img" src="' + movie.image_url + '" alt="" onclick="openModal(\'' + movie.url + '\')"></img>' + '\n'
    }

  var result = await axiosUrl( 
    next
  );
  
  if (result === null) {
    return 0
  }

  var movies = result.data.results;
  for (var i = 0; i < 5; i++) {
      var movie = movies[i];
      movies_html += '<img class="img" src="' + movie.image_url + '" alt="" onclick="openModal(\'' + movie.url + '\')"></img>' + '\n'
    }
  document.getElementById(category_id).innerHTML = movies_html;
}

async function getBestMovie() {
  movies_url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score%2C-votes"
  var result = await axiosUrl( 
      movies_url
  );
  
  if (result === null) {
    return 0
  }

  var best_movie_url = result.data.results[0].url;
  var best_movie = await axiosUrl( 
    best_movie_url
  );

  if (best_movie === null) {
    return 0
  }

  document.getElementsByClassName("best_movie_picture")[0].src = best_movie.data.image_url;
  document.getElementsByClassName("best_movie_title")[0].innerText = best_movie.data.title;
  document.getElementsByClassName("best_movie_description")[0].innerText = best_movie.data.description;
  document.getElementById("best_movie_btn").setAttribute('onclick', 'openModal(\'' + best_movie_url + '\')');
}

getBestMovie();