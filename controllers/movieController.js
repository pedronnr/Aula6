var Movie = require('../models/movie');
const movieService = require('../services/movieService')

exports.movies_list = async function(req, res) {
    var search = req.query.search;
    
    console.log("entrou movie list. ", search);

    if (search == undefined) {
        res.render('index', { movies: {}});
        return;
    }

    var moviesObj = await movieService.searchMovies(search);
    console.log("controller: ", moviesObj);
    res.render('index', { movies: moviesObj.Search });
};

exports.movie_detail = async function(req, res) {
    var movieId = req.params.id;
    var movieObj = await movieService.searchMovieById(movieId);

    console.log("entrou movie detail. ", movieObj);

    res.render('detail', { movie: movieObj})
}
