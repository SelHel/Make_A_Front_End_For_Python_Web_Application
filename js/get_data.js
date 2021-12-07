async function getBestMovies(category_url, category_id, start_from=0) {
  var result = await axios.get( 
      category_url
  );

  var next = result.data.next;
  var movies = result.data.results;
  var movies_html = "";
  for (var i = start_from; i < 5; i++) {
      var movie = movies[i];
      movies_html += '<img class="img" src="' + movie.image_url + '" alt="" onclick="openModal(\'' + movie.url + '\')"></img>' + '\n'
    }

  var result = await axios.get( 
      next
  );
  var movies = result.data.results;
  for (var i = 0; i < 5; i++) {
      var movie = movies[i];
      movies_html += '<img class="img" src="' + movie.image_url + '" alt="" onclick="openModal(\'' + movie.url + '\')"></img>' + '\n'
    }
  document.getElementById(category_id).innerHTML = movies_html;
}

async function getBestMovie() {
  movies_url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score%2C-votes"
  var result = await axios.get( 
    movies_url
  );

  console.log(result);

  var best_movie_url = result.data.results[0].url;
  var best_movie = await axios.get(
    best_movie_url
  )

  console.log(best_movie);
  document.getElementsByClassName("best_movie_picture")[0].src = best_movie.data.image_url;
  document.getElementsByClassName("best_movie_title")[0].innerText = best_movie.data.title;
  document.getElementsByClassName("best_movie_description")[0].innerText = best_movie.data.description;
  document.getElementById("best_movie_btn").setAttribute('onclick', 'openModal(\'' + best_movie_url + '\')');
}

getBestMovie();