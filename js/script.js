/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// 'quotes' array containing a list of motivational quotes

const quotes = [
  {
    quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", source: "Oscar Wilde"
  },
  {
    quote: "Today you are you, that is truer than true. There is no one alive who is you-er than you.", source: "Dr. Seuss", citation: "Happy Birthday to You!", date: "1959"
  },
  {
    quote: "Learn as if you will live forever, live like you will die tomorrow.", source: "Mahatma Gandhi"
  },
  {
    quote: "All our dreams can come true if we have the courage to pursue them.", source: "Walt Disney"
  },
  {
    quote: "Happiness is not something readymade, it comes from our own actions.", source: "Dalai Lama"
  },
  {
    quote: "If I cannot do great things, I can do small things in a great way.", source: "Martin Luther King, Jr."
  }
];

// 'getRandomQuote' function that returns a random quote from the 'quotes' array

function getRandomQuote() {
  let activeQuote = Math.floor(Math.Random * quotes.length);
  return activeQuote;
}

/***
 * `printQuote` function
***/

console.log(getRandomQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
