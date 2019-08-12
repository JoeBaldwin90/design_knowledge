// Elements
const quoteTag = document.querySelector("h1") // Quote copy
const authorTag = document.querySelector("p") // Quote author
const randomTag = document.querySelector("footer img") // Random button

// Get a random quote and put it in the site
const getQuote = function() {
  quoteTag.innerHTML = "Loaded with Javascript"
}

// Set an event listenter on the random button to run getQuote script.
randomTag.addEventListener("click", function() {
  getQuote()
})
