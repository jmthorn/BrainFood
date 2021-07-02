//Add Book Modal -----------------
 window.addEventListener("DOMContentLoaded", () => {

 let modal = document.getElementById("add-book-modal");
 let addBtn = document.querySelector(".add-book-btn");

 addBtn.addEventListener("click", async (event) => {
   event.preventDefault()
   modal.classList.remove("hidden");
   modal.classList.add("modal-show");
   let bookshelfId = event.target.baseURI.split("/")[4];
   let cover = document.getElementById("add-cover").value
   let title = document.getElementById("add-title").value;
   let author = document.getElementById("add-author").value;
   let published = document.getElementById("add-published").value;

    if(published && cover) { 
        console.log(cover)
        let res = await fetch(`/bookshelves/${bookshelfId}/add-book`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cover,
                    title,
                    author,
                    published
                })
            })
          let data = await res.json();
    }
 });
})

 window.addEventListener("click", (event) => {
   let modal = document.getElementById("add-book-modal");

   if (event.target == modal) {
     modal.classList.remove("modal-show");
     modal.classList.add("hidden");
   }
 });