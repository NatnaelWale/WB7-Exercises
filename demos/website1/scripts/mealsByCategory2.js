"use strict";



console.log("mealsinCategory");

//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="


window.onload = () => {
    const getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.onclick = ongetResultsButtonClick;
}

const resultsOutput = document.getElementById("resultsOutput");

function ongetResultsButtonClick() {
    resultsOutput.innerHTML = "";
    console.log("clicked");
    
    const categoryInput = document.getElementById("categoryInput");

    let actualUrl = apiBaseUrl + categoryInput.value;

    console.log(actualUrl)

    fetch(actualUrl).then(doWhenResponseBegins)
    // .then(response => response.json())
    // .then(processResultDataFromAPI);

}

function doWhenResponseBegins(response){
    response.json().then(processResultDataFromAPI)
}

function processResultDataFromAPI(data){
    console.log(data);
    doStuffWithArrayOfMeals(data.meals);
}

function doStuffWithArrayOfMeals(meals){
for(let meal of meals){
            doStuffWithMeal(meal);
        }
}

function doStuffWithMeal(meal){
    let p = document.createElement("p");
            p.innerHTML = meal.strMeal;
            resultsOutput.appendChild(p);
}