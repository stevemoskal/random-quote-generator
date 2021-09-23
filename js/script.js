/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// 'quotes' array containing a list of quotes

const quotes = [
  {
    quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", source: "Oscar Wilde"
  },
  {
    quote: "Today you are you, that is truer than true. There is no one alive who is you-er than you.", source: "Dr. Seuss", citation: "Happy Birthday to You!", year: "1959"
  },
  {
    quote: "Learn as if you will live forever, live like you will die tomorrow.", source: "Mahatma Gandhi"
  },
  {
    quote: "All our dreams can come true if we have the courage to pursue them.", source: "Walt Disney", tags: "Motivational"
  },
  {
    quote: "Happiness is not something readymade, it comes from our own actions.", source: "Dalai Lama"
  },
  {
    quote: "If I cannot do great things, I can do small things in a great way.", source: "Martin Luther King, Jr.", tags:"Motivational"
  },
  {
    quote: "Success is not final, failure is not fatal; it is the courage to continue that counts", source: "Winston Churchill", tags: "Motivational"
  },
  {
    quote: "Believe you can, and you're halfway there.", source: "Theodore Roosevelt"
  },
  {
    quote: "Life is like a bicycle. To keep your balance, you have to keep moving.", source: "Albert Einstein"
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream", source: "C.S. Lewis"
  }

];

// 'getRandomQuote' function that returns a random quote from the 'quotes' array

function getRandomQuote() {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];
}

// 'getRandomColour' function sets a new random background colour, colours are set to dark for contrast with white text
// function help provided by https://webdesign.tutsplus.com/tutorials/generate-random-background-colors-javascript--cms-37030

const getRandomHue = (maxH) => {
  return Math.floor(Math.random() * maxH);
}
const getRandomColour = () => {
  const h = getRandomHue(360);
  return `hsl(${h}deg, 50%, 20%)`;
}


// 'printQuote' function that will print the active random quote to the page, change the background colour, and reset the timer

function printQuote() {
  let activeQuote = getRandomQuote();
  if (activeQuote.hasOwnProperty('citation' && 'year')) {
    document.getElementById("quote-box").innerHTML = `
    <p class="quote">${activeQuote.quote}</p>
    <p class="source">${activeQuote.source}
      <span class="citation">${activeQuote.citation}</span>
      <span class="year">${activeQuote.year}</span>
    </p>`;
  } else if (activeQuote.hasOwnProperty('tags')) {
    document.getElementById("quote-box").innerHTML = `
    <p class="quote">${activeQuote.quote}</p>
    <p class="source">${activeQuote.source}
      <span class="year">${activeQuote.tags}</span>
    </p>`;
  } else {
    document.getElementById("quote-box").innerHTML = `<p class="quote">${activeQuote.quote}</p>
    <p class="source">${activeQuote.source}</p>`;
  }
  document.body.style.backgroundColor = getRandomColour();
  clearTimeout(timer);
  timer = setInterval(printQuote, 15000);
}

// 'setInterval' to refresh the quote every 15 seconds even if the button is not clicked

var timer = setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
