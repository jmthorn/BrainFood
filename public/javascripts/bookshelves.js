const newShelf = document.getElementById("add-shelf-button");

 newShelf.addEventListener('click', event => {
      event.preventDefault();
      const bookshelvesList = document.getElementById("ul-bookshelves");
      const bookshelves = document.querySelectorAll("li");
      const a = document.createElement("a");
      const deleteButton = document.createElement("a");
      const li = document.createElement("li");
      const form = document.getElementById("add-shelf");
      const formData = new FormData(form);
      const name = formData.get("listname");
      if (bookshelves.length >= 15) return;
      fetch("/bookshelves/add-shelf", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
        // JSON.stringify({
        //   name,
        //}),
      })
        .then((response) => response.json())
        .then(json => {
          if (json.bookshelf.name) {
          console.log(json.bookshelf);
          a.innerHTML = json.bookshelf.name;
          li.setAttribute("class", "bookshelf-li");
          a.setAttribute("href", `/bookshelves/${json.bookshelf.id}`);
          deleteButton.setAttribute("bookshelf-id", `${json.bookshelf.id}`)
          deleteButton.setAttribute("class", "bookshelf-li delete-button");
          deleteButton.innerHTML = 'ⓧ';
          li.appendChild(a);
          li.appendChild(deleteButton);
          bookshelvesList.appendChild(li);

          deleteButton.addEventListener("click", async (event) => {
            event.preventDefault();
            let bookshelfId = event.target.getAttribute("bookshelf-id");
            let deleteConfirm = confirm(
              "Are you sure you would like to delete?"
            );
            if (!deleteConfirm) return;
            let res = await fetch(`/bookshelves/${bookshelfId}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
            console.log(res);
            if (res.ok) {
              event.target.parentElement.remove();
            }
          });
          } else return;
          }
        );
 });

//Delete Bookshelf

let deleteBookshelves = document.querySelectorAll(".delete-button");
for (const button of deleteBookshelves) {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    let bookshelfId = event.target.getAttribute("bookshelf-id");
    let deleteConfirm = confirm("Are you sure you would like to delete?");
    if (!deleteConfirm) return;
    let res = await fetch(`/bookshelves/${bookshelfId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    if (res.ok) {
      event.target.parentElement.remove();
    }
  });
}

  //DELETE BOOK FROM BOOKSHELF==========================

  let deleteFromBookshelfBtns = document.querySelectorAll(
    ".delete-from-bookshelf"
  );
  console.log("btns", deleteFromBookshelfBtns);
  deleteFromBookshelfBtns.forEach((btn) => {
    btn.addEventListener("click", async (event) => {
      event.preventDefault();
      let bookshelfId = event.target.baseURI.split("/")[4];
      let bookId = event.target.getAttribute("book-id");
      let res = await fetch(`/books/${bookId}/bookshelves`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookshelfId,
          bookId,
        }),
      });
      let data = await res.json();
      console.log(data);
    if (res.ok) {
      event.target.parentElement.parentElement.remove();
    }
    });
  });
