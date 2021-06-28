window.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("navbar-search")
    searchBar.addEventListener("keyup", async(e) => { 
        const searchEntry = e.target.value;
        let res = await fetch(`/search/${searchEntry}`)
        let data = await res.json()
        console.log("-------------------------------",data)
    })
})