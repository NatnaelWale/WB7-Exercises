"use strict";

const movieCategory = document.getElementById("movieCategory");
const moviesListRow = document.getElementById("moviesListRow");

let apiUrlForMovieCategory =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=8489ebb9ba5ed2713e527c0cb438b455&with_genres=10402";
let apiBaseUrlMoviesList =
  "https://api.themoviedb.org/3/discover/movie?api_key=8489ebb9ba5ed2713e527c0cb438b455&with_genres=10402";

window.onload = () => {
  populateMovieCategory;
};

fetch(apiUrlForMovieCategory)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let moviesCategory = populateMovieCategory(genre);
      movieCategory.appendChild(moviesCategory);
    }

  function populateMovieCategory(genre) {
      let option = document.createElement("option");
      option.textContent = data[i].name;
      movieCategory.appendChild(option);
    }
  });

fetch(apiBaseUrlMoviesList)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);

    for (let movie of data.results) {
      let moviesColumnElement = createmoviesColumnElement(movie);
      moviesListRow.appendChild(moviesColumnElement);
    }

    function createmoviesColumnElement(movie) {
      let movieColumnDiv = document.createElement("div");

      movieColumnDiv.className = "col-lg-4";

      let movieCardDiv = document.createElement("div");
      movieCardDiv.className = "card moviecard";

      movieColumnDiv.appendChild(movieCardDiv);

      let movieImage = document.createElement("img");
      movieImage.src =
        "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path;
      movieImage.className = "card-img-top img";
      movieImage.alt = movie.name;

      movieCardDiv.appendChild(movieImage);

      let cardBodyDiv = document.createElement("div");
      cardBodyDiv.className = "card-body";

      movieCardDiv.appendChild(cardBodyDiv);

      let movieHeadedTag = document.createElement("h5");
      movieHeadedTag.innerHTML = movie.title;

      cardBodyDiv.appendChild(movieHeadedTag);

      let movieReleaseDate = document.createElement("p");
      movieReleaseDate.className = "card-text";
      movieReleaseDate.innerText = `Release Date: ${movie.release_date}`;

      cardBodyDiv.appendChild(movieReleaseDate);

      let movieId = document.createElement("p");
      movieId.innerText = `Movie Id: ${movie.id}`;
      cardBodyDiv.appendChild(movieId);

      return movieColumnDiv;
    }
  });
