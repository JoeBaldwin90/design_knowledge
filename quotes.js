// Elements
const quoteTag = document.querySelector("h1") // Quote copy
const authorTag = document.querySelector("p") // Quote author
const randomTag = document.querySelector("footer img") // Random button

let data = []

fetch("quotes_list.json")             // Custom array of objects
  .then(response => response.json())  // Convert to JSON (using quotes on keys)
  .then(json => {                     // Handle the data
    data = json
    getQuote()
  })

// Get a random quote and put it in the site
const getQuote = function() {
  // Data will be longer than 0 once it has loaded
  if (data.length > 0) {
    // Generate random integer
    const randomNumber = Math.floor(Math.random() * data.length)
    // Use integer as the data index
    const randomQuote = data[randomNumber]

    // Populate quote and author elements
    quoteTag.innerHTML = randomQuote.quote
    authorTag.innerHTML = randomQuote.author
  }
}

// Set an event listenter on the random button to run getQuote script.
randomTag.addEventListener("click", function() {
  getQuote()
})
