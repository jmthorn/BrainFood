window.addEventListener("DOMContentLoaded", () => {


    document.getElementById("submit-review")
        .addEventListener("click", async(event) => { 
            event.preventDefault();
            let bookId = event.target.baseURI.split('/')[4]
            let textarea = document.querySelector(".new-review")
            let review = textarea.value
            let rating = document.getElementById('book-rating').value
            let res = await fetch(`http://localhost:8080/books/${bookId}/reviews`, { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    review,
                    bookId,
                    rating
                })
            })
            let data = await res.json()
            console.log(data)
            
        })

        let modal = document.getElementById("modal")
        let editBtn = document.querySelector(".book-edit")
        
        editBtn.addEventListener("click", (event) => { 
            modal.classList.remove("hidden")
            modal.classList.add("modal-show")
        })

        window.addEventListener("click", (event) => {
            if (event.target == modal) {
                modal.classList.remove("modal-show")
                modal.classList.add("hidden")
            }
        })

})
