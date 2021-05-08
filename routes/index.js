var express = require('express');
var router = express.Router();

var movie_controller = require('../controllers/movieController');


/* GET home page. */
router.get('/', movie_controller.movies_list);

router.get('/movies/:id', movie_controller.movie_detail)

module.exports = router;
