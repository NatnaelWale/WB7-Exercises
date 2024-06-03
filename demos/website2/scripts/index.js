"use strict";

let table = document.getElementById("userTable");
fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      cell1.innerHTML = data[i].name;
      cell2.innerHTML = data[i].email;
    }
  });
