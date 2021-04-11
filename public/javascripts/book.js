window.addEventListener("DOMContentLoaded", () => {

    const addReview = (review, userId) => {
        let div = document.createElement('div')
        div.classList.add("review-container");
        let h4 = document.createElement('h4');
        h4.classList.add("review-author");
        div.appendChild(h4);
        h4.innerText = `👤 ${review.author}`;
        let ratingSpan = document.createElement("span")
        ratingSpan.classList.add("review-rating");
        for (let i = 1; i <= review.rating; i++) {
            ratingSpan.innerHTML += '🧠';
        }
        h4.appendChild(ratingSpan)
        if (review.userId === userId) {
            let editButton = document.createElement('button');
            editButton.innerText = "Edit";
            editButton.classList.add("review-edit-btn")
            editButton.classList.add("btn")
            div.appendChild(editButton)
            let deleteButton = document.createElement('button');
            deleteButton.innerText = "Delete";
            deleteButton.classList.add("review-delete-btn")
            deleteButton.classList.add("btn")
            deleteButton.setAttribute("review-id", review.id)
            div.appendChild(deleteButton)
        }
        let p = document.createElement('p')
        p.innerHTML = review.review
        div.appendChild(p)
        let existingReviews = document.querySelector(".existing-reviews")
        let reviewsContainer = document.querySelector(".reviews-container")
        existingReviews.insertBefore(div, existingReviews.childNodes[0])
        let textarea = document.querySelector(".new-review-textarea")
        textarea.value = "";
    }

    //ADD REVIEW ================================

    document.getElementById("submit-review")
        .addEventListener("click", async (event) => {
            event.preventDefault();
            let bookId = event.target.baseURI.split('/')[4]
            let textarea = document.querySelector(".new-review-textarea")
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
            addReview(data.newReview, data.newReview.userId)
        })

    //DELETE REVIEW FROM BOOK==========================
    let reviewsContainer = document.querySelector(".existing-reviews")
    reviewsContainer.addEventListener("click", async (event) => {
        // check if any of the delete buttons are clicked (including new delete button)
        if (!event.target.classList.contains("review-delete-btn")) return
        event.preventDefault();
        let deleteConfirm = confirm("Are you sure you would like to delete?")
        if (!deleteConfirm) return
        let reviewId = event.target.getAttribute("review-id");
        let res = await fetch(`/books/reviews/${reviewId}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.ok) {
            event.target.parentElement.remove();
        } else {
            // TODO
        }
    })
    //ADD TO BOOKSHELF==========================

    let addToBookshelfBtn = document.querySelector(".add-book-bookshelf")
    addToBookshelfBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        let bookshelfId = document.querySelector(".bookshelves-dropdown").value
        let bookId = event.target.baseURI.split('/')[4]
        let res = await fetch(`http://localhost:8080/books/${bookId}/bookshelves`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bookshelfId,
                bookId
            })
        })
        let data = await res.json()
    })

    //DELETE BOOK FROM BOOKSHELF==========================

    let deleteFromBookshelfBtn = document.querySelector(".book-delete")
    deleteFromBookshelfBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        let deleteConfirm = confirm("Are you sure you would like to delete?")
        if (!deleteConfirm) return
        let bookId = event.target.baseURI.split('/')[4]
        let res = await fetch(`http://localhost:8080/books/${bookId}/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bookId
            })
        })
        let data = await res.json()
        window.location = '/bookshelves'
    })



    //MODAL=====================================
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

    //ADD TAGS====================================

    const addTag = (tagCategory) => {
        let tagContainer = document.querySelector(".tags")
        let div = document.createElement("div")
        div.innerText = tagCategory
        div.classList.add("book-tag")
        tagContainer.insertBefore(div, tagContainer.childNodes[0])
    }


    let tagBtn = document.querySelector(".tag-btn")
    tagBtn.addEventListener("click", async (event) => {
        event.preventDefault()
        
        let tagInput = document.querySelector(".tag-input")
        let category = tagInput.value
        let bookId = event.target.baseURI.split('/')[4]

        let res = await fetch(`http://localhost:8080/books/${bookId}/tags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category,
                bookId
            })
        })

        let data = await res.json()
        // console.log(data.newTag)
        // addReview(data.newTag, data.newTag.userId)
        addTag(data.newTag.category)
    })

})
