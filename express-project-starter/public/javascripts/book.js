window.addEventListener("DOMContentLoaded", () => {


    document.getElementById("submit-review")
        .addEventListener("click", event => { 
            event.preventDefault();
            let bookId = event.target.baseURI.split('/')[4]
            let textarea = document.querySelector(".new-review")
            console.log(event)
            let review = textarea.value
            fetch(`http://localhost:8080/books/${bookId}/reviews`, { 
                method: "POST",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                review
                })
            })
                .then(function(res) { 
                    return res.json()
                })
                .then(function(data) { 
                    console.log(data)
                })
                .catch(function(error) {
                console.log(error);
                });
            
        })




})