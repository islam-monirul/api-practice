const loadQuotes = () => {
     fetch('https://api.kanye.rest/')
     .then(res => res.json())
     .then(data => displayQuote(data))
}

const displayQuote = (quote) => {
     const quoteElm = document.getElementById('quote');
     quoteElm.textContent = quote.quote;
}