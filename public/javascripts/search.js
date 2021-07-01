window.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("navbar-search")
    const searchResults = document.getElementById("searchResults")
    searchBar.addEventListener("keyup", async(e) => { 
        searchResults.innerHTML=""
        const searchEntry = e.target.value;
        let res = await fetch(`/search/${searchEntry ? searchEntry : "|"}`)
        let data = await res.json()
        if(data.searchBooks.length) { 
            searchResults.style.visibility = "visible"
            
                for (let i = 0; i < data.searchBooks.length; i++) { 
                    let resultItemLink = document.createElement('a')
                    resultItemLink.setAttribute("href", `/books/${data.searchBooks[i].id}`)
                    let resultItem = document.createElement('li');
                    resultItem.innerText = data.searchBooks[i].title
                    resultItemLink.appendChild(resultItem)
                    searchResults.appendChild(resultItemLink)
                    }
        } 
        if(data.searchBooks.length == 0) { 
            searchResults.style.visibility = "hidden"
        }
    })
})

