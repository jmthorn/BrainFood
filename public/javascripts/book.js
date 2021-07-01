window.addEventListener("DOMContentLoaded", () => {

    const addReview = (review, userId) => {
        let div = document.createElement('div')
        div.classList.add("review-container");
        let h4 = document.createElement('h4');
        h4.classList.add("review-author");
        div.appendChild(h4);
        h4.innerText = review.author;
        let ratingSpan = document.createElement("span")
        ratingSpan.classList.add("review-rating");
        for (let i = 1; i <= review.rating; i++) {
            ratingSpan.innerHTML += '🧠';
        }
        div.appendChild(ratingSpan)
        if (review.userId === userId) {
            let editButton = document.createElement('button');
            editButton.innerText = "Edit";
            editButton.classList.add("review-edit-btn")
            editButton.classList.add("btn")
            editButton.setAttribute("review-id", review.id)
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
            let res = await fetch(`/books/${bookId}/reviews`, {
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

    //DELETE AND EDIT REVIEW FROM BOOK==========================
    let reviewsContainer = document.querySelector(".existing-reviews")
    reviewsContainer.addEventListener("click", async (event) => {
        let reviewId = event.target.getAttribute("review-id");
        // check if any of the delete buttons are clicked (including new delete button)
        if (event.target.classList.contains("review-delete-btn")) {
            event.preventDefault();
            let deleteConfirm = confirm("Are you sure you would like to delete?")
            if (!deleteConfirm) return
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
        }
        // check if any of the edit buttons are clicked (including new edit button)
        if (event.target.classList.contains("review-edit-btn")) {
            event.preventDefault();
            let reviewModal = document.getElementById("review-modal")
            reviewModal.classList.remove("hidden")
            reviewModal.classList.add("modal-show")
            //action when submitting edited review
            let editReviewForm = document.getElementById("edit-review-form")
            editReviewForm.setAttribute("action", `/books/reviews/${reviewId}`)
        }
    })



    //ADD TO BOOKSHELF==========================

    let addToBookshelfBtn = document.querySelector(".add-book-bookshelf")
    addToBookshelfBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        let bookshelfId = document.querySelector(".bookshelves-dropdown").value
        let bookId = event.target.baseURI.split('/')[4]
        let res = await fetch(`/books/${bookId}/bookshelves`, {
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

    //DELETE BOOK============================================

    let deleteFromBookshelfBtn = document.querySelector(".book-delete")
    deleteFromBookshelfBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        let deleteConfirm = confirm("Are you sure you would like to delete?")
        if (!deleteConfirm) return
        let bookId = event.target.baseURI.split('/')[4]
        let res = await fetch(`/books/${bookId}/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bookId
            })
        })
        console.log('DELETEEEEEEEEE', bookId)
        let data = await res.json()
        console.log(data)
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
        if (event.target === modal) {
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

        let res = await fetch(`/books/${bookId}/tags`, {
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
        if (!data.newTag) {
            addTag(data.existingTag.category)
        } else[
            addTag(data.newTag.category)
        ]
    })



    //EDIT READSTATUS FROM BOOK==========================

    let readstatusModal = document.getElementById("readstatus-modal")
    let readeditBtn = document.querySelector(".readstatus-edit")

    readeditBtn.addEventListener("click", (event) => {
        readstatusModal.classList.remove("hidden")
        readstatusModal.classList.add("modal-show")
    })

    window.addEventListener("click", (event) => {
        if (event.target === readstatusModal) {
            readstatusModal.classList.remove("modal-show")
            readstatusModal.classList.add("hidden")
        }
    })


    let readStatusForm = document.querySelector(".readstatus-form")
    readStatusForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        let readStatus = document.getElementById("rstatus")
        let readStatusInput = readStatus.value
        let bookId = event.target.baseURI.split('/')[4]

        let res = await fetch(`/books/${bookId}/readstatus`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                readStatusInput
            })
        })
        let data = await res.json()
        let readStatusFeild = document.querySelector(".readstatus")
        readStatusFeild.innerText = `Read Status: ${readStatusInput}`
        let statusButton = document.createElement("button")
        statusButton.classList.add("readstatus-edit")
        statusButton.innerText = "Edit Status"
        readStatusFeild.appendChild(statusButton)

        statusButton.addEventListener("click", (event) => {
            readstatusModal.classList.remove("hidden")
            readstatusModal.classList.add("modal-show")
        })
    })


    // DELETE TAGS ===================================================

    let tagdeletebtn = document.querySelectorAll(".delete-tag")
    for (const button of tagdeletebtn) {
        button.addEventListener("click", async (event) => {
            event.preventDefault()
            let tagId = event.target.value
            let bookId = event.target.baseURI.split('/')[4]
            console.log('DELETEEEEEEEEE', bookId, tagId)
            let res = await fetch(`/books/${bookId}/tags/${tagId}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            console.log('DELETEEEEEEEEE', bookId, res)
            if (res.ok) {
                event.target.parentElement.remove();
            }
            // let data = await res.json()
            // console.log("DATAAAA:", data)
        })
    }




})
