window.addEventListener("load", (event) => {
    function getQuote() {
        //get a response from motivationalURL
        return fetch("/quote")
            .then((response) => response.json())
            .then((quote) => {
                const quoteElement = document.getElementById("quote")
                quoteElement.innerHTML = `${quote.q}  - ${quote.a}`;
            })
            .catch(err => console.log(`Error: ${err}`))
    }
    getQuote()
})
