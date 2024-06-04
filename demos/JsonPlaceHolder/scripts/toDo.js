"use strict";

//https://jsonplaceholder.typicode.com/todos/1

const apiBaseUrl = "https://jsonplaceholder.typicode.com/todos/";

window.onload = () => {
  const getResultsButton = document.getElementById("getResultsButton");
  getResultsButton.onclick = ongetResultsButtonClick;
};

const resultsOutput = document.getElementById("resultsOutput");

function ongetResultsButtonClick() {
  resultsOutput.innerHTML = "";

  // console.log("clicked");

  const idInput = document.getElementById("idInput");

  let actualUrl = apiBaseUrl + idInput.value;

  // console.log(actualUrl);

  fetch(actualUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
        let p = document.createElement("p");
        p.innerHTML = data.title;
        resultsOutput.appendChild(p);
      
    });
}
