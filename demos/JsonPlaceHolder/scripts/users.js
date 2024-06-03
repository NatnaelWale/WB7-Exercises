"use strict";

//https://jsonplaceholder.typicode.com/users

let apiBaseUrl = "https://jsonplaceholder.typicode.com/users";

const table = document.getElementById("userTable");

table.innerHTML = "";

fetch(apiBaseUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    table.innerHTML = "";
    table.className = "table table-striped table-hover border mt-5";
    const thead = document.createElement("thead");
    thead.className = "table-dark";
    const tbody = document.createElement("tbody");
    tbody.className = "table-group-divider";

    const headerRow = document.createElement("tr");
    ["Name", "Email", "Address", "Phone", "Website", "Company"].forEach((text) => {
      const header = document.createElement("th");
      header.textContent = text;
      headerRow.appendChild(header);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    data.forEach((user) => {
      const row = document.createElement("tr");
      const x = user.address;
      const address = x.street + " " + x.suite + " " + x.city + " " + x.zipcode
      row.appendChild(createCell(user.name));
      row.appendChild(createCell(user.email));
      row.appendChild(createCell(address));
      row.appendChild(createCell(user.phone));
      row.appendChild(createCell(user.website));
      row.appendChild(createCell(user.company.name));
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
  });


  function createCell(text) {
    const cell = document.createElement("td");
    cell.textContent = text;
    cell.className = "w-25"
    return cell;
}
