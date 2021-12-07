async function showMovieData(movie_url) {
    var result = await axios.get( 
        movie_url
    );

    console.log(result.data);
    document.getElementById("movie_picture").src = result.data.image_url;
    document.getElementById("movie_title").innerText = result.data.title;
    document.getElementById("movie_genres").innerText = "Genres : " + result.data.genres.join(", ");
    document.getElementById("movie_release_date").innerText = "Date de sortie : " + result.data.date_published;
    document.getElementById("movie_rated").innerText = "Note : " + checkIfRatedExists(result.data.rated);
    document.getElementById("movie_imdb_score").innerText = "Score Imdb : " + result.data.imdb_score;
    document.getElementById("movie_directors").innerText = "Réalisateur : " + result.data.directors;
    document.getElementById("movie_actors").innerText = "Acteurs : " + result.data.actors.join(", ");
    document.getElementById("movie_duration").innerText = "Durée : " + result.data.duration + " minutes";
    document.getElementById("movie_countries").innerText = "Pays d'origine : " + result.data.countries;
    document.getElementById("movie_box_office_result").innerText = "Résultat au Box Office : " + checkIfRatedExists(result.data.worldwide_gross_income);
    document.getElementById("movie_synopsis").innerText = "Description : " + result.data.long_description;
}

function checkIfRatedExists(data) {
    if (data === null || data === "none") {
        return "Inconnu"
    }
    if (data.includes("Not rated") || data.includes("unkown")) {
        return "Inconnu"
    }
    return data
}
