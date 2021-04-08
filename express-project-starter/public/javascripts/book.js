
window.addEventListener("DOMContentLoaded", () => {

    const addReview = (review, userId) => {
        let div = document.createElement('div')
        div.classList.add("review-container");
        let h4 = document.createElement('h4');
        h4.classList.add("review-author");
        div.appendChild(h4);
        let userSpan = document.createElement("span");
        userSpan.classList.add("review-user-silhouette")
        userSpan.innerHTML = '👤'
        h4.appendChild(userSpan)
        h4.innerText=review.author;
        let ratingSpan = document.createElement("span")
        ratingSpan.classList.add("review-rating");
        for(let i = 1; i <= review.rating; i++) { 
            ratingSpan.innerHTML += '🧠';
        }
        h4.appendChild(ratingSpan)
        if(review.userId===userId) { 
            let button = document.createElement('button');
            button.innerText= "Edit";
            button.classList.add("review-edit-btn")
            button.classList.add("btn")
            h4.appendChild(button)
        }

    }

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
            // console.log("INFORMATIONNNN", review, data.newReview.userId)
            addReview(review, data.newReview.userId)
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
