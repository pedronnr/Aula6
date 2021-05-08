
const axios = require("axios");

const OMDb_KEY = "9ed2556f";

let cachedMovies = [];

const searchMovies = async (searchText) => {
   let result = checkCache(searchText);
   if (result) {
       console.log("Cache...");
        return result;
   }

   console.log("API...");
       
  const url = `https://www.omdbapi.com/?apikey=${OMDb_KEY}&s=${searchText}`;
  return axios(url).then((response) => {
      addMovieCache(searchText, response.data);

      return response.data;
    });
};

const checkCache = (searchText) => {
    let resultObj = cachedMovies.find(m => m.movie == searchText);

    return resultObj ? resultObj.results : null;
};

const addMovieCache = (movie, results) => {
    cachedMovies.push({ "movie" : movie,  "results" : results });
};

const searchMovieById = async (id) => {
    const url = `https://www.omdbapi.com/?apikey=${OMDb_KEY}&i=${id}`
    return axios(url).then((response) => {
       return response.data;
    });
}

module.exports = {
    searchMovies,
    searchMovieById
}