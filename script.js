// script.js

const quotes = [
    "This is a cool quote.",
    "Another inspiring quote.",
    "Quotes are awesome!",
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector('.s3-QUOTE p').innerText = quotes[randomIndex];
}

// Call the function to display a random quote when the page loads
displayRandomQuote();