window.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("navbar-search")
    searchBar.addEventListener("keyup", e => { 
        const searchEntry = e.target.value;
        console.log(searchEntry)
        
    })
})