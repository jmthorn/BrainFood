 
//const db = require("../db/models");
 
 

const newShelf = document.getElementById("add-shelf-button");

 newShelf.addEventListener('click', event => {
      event.preventDefault();
      const bookshelves = document.getElementById("ul-bookshelves");
      const li = document.createElement("li");

      fetch("/bookshelves/add-shelf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => response.text())
        .then(json => console.log(json));
      bookshelves.appendChild(li);
 });

//fetch call to route on my db
//fetch plain json -- post route will generate instance on the backend
//from js - await res.json() 
//make that appear on the page by appending it to list
//since the bookshelf is added to db on our get route - it would be in our backend query, so it's permanent