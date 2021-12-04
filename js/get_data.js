async function getBestMovies(category_url, category_id) {
    var result = await axios.get( 
        category_url
    );

    var next = result.data.next;
    var movies = result.data.results;
    var movies_html = "";
    for (let i = 1; i < 5; i++) {
        var movie = movies[i];
        movies_html += '<img class="img" src="' + movie.image_url + '" alt="" onclick="openModal(\'' + movie.url + '\')"></img>' + '\n'
      }

    var result = await axios.get( 
        next
    );
    var movies = result.data.results;
    for (let i = 0; i < 5; i++) {
        var movie = movies[i];
        movies_html += '<img class="img" src="' + movie.image_url + '" alt="" onclick="openModal(\'' + movie.url + '\')"></img>' + '\n'
      }
    document.getElementById(category_id).innerHTML = movies_html;
}