"use strict";

let apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=8489ebb9ba5ed2713e527c0cb438b455"

window.onload = () => {

    const moviesListRow = document.getElementById("moviesListRow");

    console.log("onload");


    fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results)


    for(let movie of data.results){
        let moviesColumnElement = createmoviesColumnElement(movie);
        moviesListRow.appendChild(moviesColumnElement);
    }


function createmoviesColumnElement(movie){
    let movieColumnDiv = document.createElement("div");

    movieColumnDiv.className = "col-lg-4";

    let movieCardDiv = document.createElement("div");
    movieCardDiv.className = "card moviecard";

    movieColumnDiv.appendChild(movieCardDiv);

    let movieImage = document.createElement("img");
    movieImage.src = "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path;
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
    movieReleaseDate.innerText = `Release Date: ${movie.release_date}`

    cardBodyDiv.appendChild(movieReleaseDate);


    let movieId = document.createElement("p");
    movieId.innerText = `Movie Id: ${movie.id}`;
    cardBodyDiv.appendChild(movieId);


    return movieColumnDiv;
};
})};