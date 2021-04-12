


//  one eventlistener on a submit for the edit
//  one eventlistener on a delete
  // click the logout button and do the fetch to redirect
  // delete
console.log('connect to script file')

// need to edit for me, just copied over;

window.addEventListener("DOMContentLoaded", () => {
  let modal = document.getElementById("modal");
  let userEditBtn = document.getElementById('edit-btn');
  let openModal = document.getElementById('modal-button');
  let userModalForm = document.getElementById('user-form')
  let deleteProfileBtn = document.getElementById('delete-btn')


  openModal.addEventListener("click", (event) => {
    console.log('clicked edit button to open modal')
    modal.classList.remove("hidden")
      modal.classList.add("modal-show")
  })


  window.addEventListener("click", (event) => {
    if (event.target === modal) {
          modal.classList.remove("modal-show")
          modal.classList.add("hidden")
      }
  })


  userEditBtn.addEventListener("click", async (event) => {
    event.preventDefault();     // Don't want a refresh
    // console.log(userModalForm.children.value)
    let newUser = document.getElementById('Username').value
    let newEmail = document.getElementById('Email').value
    let newPicture = document.getElementById('Profile Picture').value

    let personId = event.target.baseURI.split('/')[5]

    // console.log(personId)

    modal.classList.remove("modal-show")
    modal.classList.add("hidden")

    let res = await fetch(`http://localhost:8080/users/profile/${personId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            newUser,
            newEmail,
            newPicture
        })
      })

    let data = await res.json()     // prints out the update
    let { user } = data;
    console.log(user);

    let userName = document.getElementById('user-name');
    let userEmail = document.getElementById('email');

    userName.innerHTML = user.username;
    userEmail.innerHTML = user.email;
  })

  deleteProfileBtn.addEventListener('click', async(event) => {
    event.preventDefault();
    let deleteConfirmation = confirm('Are you sure you want to delete your profile?')
    if(!deleteConfirmation) return

    let personId = event.target.baseURI.split('/')[5]
    let res = await fetch(`http://localhost:8080/users/profile/${personId}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (res.ok) {
      let data = await res.json()
      console.log(data)
    }
  })

})
