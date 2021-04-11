window.addEventListener("load", (event) => {
    function getQuote() {
        //get a response from zenquotes
        return fetch("/quote")
            .then((response) => response.json())
            .then((quote) => {
                const quoteElement = document.getElementById("quote")
                quoteElement.innerHTML=""
                let leftQuotation = document.createElement("div")
                let rightQuotation = document.createElement("div")
                leftQuotation.innerHTML="\""
                rightQuotation.innerHTML="\""
                leftQuotation.classList.add("leftQuotation")
                rightQuotation.classList.add("rightQuotation")
                quoteElement.appendChild(leftQuotation)
                quoteElement.appendChild(rightQuotation)
                let actualQuote = document.createElement("div")
                actualQuote.classList.add("actualQuote")
                actualQuote.innerHTML=quote.q
                let author = document.createElement("div")
                author.classList.add("author")
                author.innerHTML=`- ${quote.a}`
                
                quoteElement.appendChild(actualQuote)
                quoteElement.appendChild(author)
            })
            .catch(err => console.log(`Error: ${err}`))
    }
    setInterval(getQuote, 7000);


})

