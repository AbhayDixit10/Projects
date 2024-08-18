const apiUrl = "https://api.quotable.io/random"
const newQuoteBtn = document.querySelector("#newQuote");
const tweetBtn = document.querySelector("#tweet");
const loadedQuote = document.querySelector("#loadedQuote");
const loadedAuthor = document.querySelector("#loadedAuthor"); 


async function getQuote(url) {
    const response = await fetch(url);
    let quote = await response.json();
    console.log(quote);
    
    document.querySelector("#quote h3").innerHTML = quote.content;
    document.querySelector("#quote h4").innerHTML = `- ` + quote.author;

};

newQuoteBtn.addEventListener("click", function(){
    getQuote(apiUrl);
});
getQuote(apiUrl);

// https://twitter.com/intent/tweet?text=ss&url=url

tweetBtn.addEventListener("click", function (){
    window.open("https://twitter.com/intent/tweet?text=" + loadedQuote.innerHTML + "----- By" + loadedAuthor.innerHTML, "Tweet Window", "width = 600, height = 500");
})
