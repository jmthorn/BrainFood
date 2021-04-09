//  one eventlistener on a submit for the edit
//  one eventlistener on a delete


// need to edit for me, just copied over;
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
