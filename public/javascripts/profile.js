//  one eventlistener on a submit for the edit
//  one eventlistener on a delete
  // click the logout button and do the fetch to redirect
  // delete


// need to edit for me, just copied over;

window.addEventListener("DOMContentLoaded", () => {

  const editProfile = (username, email, image) => {

  }





  let modal = document.getElementById("modal")
  let userEditBtn = document.querySelector('.edit-btn')

  userEditBtn.addEventListener("click", (event) => {
      modal.classList.remove("hidden")
      modal.classList.add("modal-show")
  })

  window.addEventListener("click", (event) => {
      if (event.target == modal) {
          modal.classList.remove("modal-show")
          modal.classList.add("hidden")
      }
  })




}
