// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Define the quote and author elements
    const textElement = document.getElementById("text");
    const authorElement = document.getElementById("author");
    const newQuoteButton = document.getElementById("new-quote");
    const tweetQuoteButton = document.getElementById("tweet-quote");
  
    // Function to fetch a random quote from the API
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        const quote = data.content;
        const author = data.author;
  
        // Update the quote and author elements
        textElement.textContent = `"${quote}"`;
        authorElement.textContent = `- ${author}`;
  
        // Update the Tweet link
        tweetQuoteButton.href = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
      } catch (error) {
        console.error("Error fetching quote:", error);
        textElement.textContent = "Sorry, couldn't fetch a quote!";
        authorElement.textContent = "";
      }
    };
  
    // Fetch the first quote on page load
    fetchQuote();
  
    // Set up the "New Quote" button click handler
    newQuoteButton.addEventListener("click", fetchQuote);
  });
  