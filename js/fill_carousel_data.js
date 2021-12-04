var url_top_movies = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score%2C-votes"
var url_top_action = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score%2C-votes"
var url_top_adventure = "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score%2C-votes"
var url_top_horror = "http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score%2C-votes"

getBestMovies(url_top_movies, 'TopMovies');

getBestMovies(url_top_action, 'TopAction');

getBestMovies(url_top_adventure, 'TopAdventure');

getBestMovies(url_top_horror, 'TopHorror');