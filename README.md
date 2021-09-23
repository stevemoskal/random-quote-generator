# Random Quote Generator
## Website that randomly generates quotes.

#### Description

This repository was designed for the Treehouse TechDegree course, Project-1.

This project is currently complete and I am hoping to obtain an "Exceeds Expectations" grading based on the grading key provided.

There are three different types of code contained in this repository, HTML, CSS and JavaScript. The HTML and CSS was provided by Treehouse, and it was my object to complete the JavaScript code.

Most of my experience prior to this project was obtained by completing the "Front End Web Development" track on the Treehouse website.

#### Outside Resources

I required help on one of the sections, where I needed to change the background colour of index.html every time the printQuote function ran. For this I consulted a website found with a basic google search on the topic, (https://webdesign.tutsplus.com/tutorials/generate-random-background-colors-javascript--cms-37030). The code I wrote using help from this website is as follows:

```

const getRandomHue = (maxH) => {
  return Math.floor(Math.random() * maxH);
}
const getRandomColour = () => {
  const h = getRandomHue(360);
  return `hsl(${h}deg, 50%, 20%)`;
}

```

I also referenced several different sections of the MDN docs (https://developer.mozilla.org/en-US/) for help on a few items, most notably the setInterval function to change the quote every 15 seconds even if the button is not pressed, using the following code.

```
var timer = setInterval(printQuote, 15000);
```

#### Framework Used

This project was built using:
  - Atom Text Editor (https://atom.io)
  - Github Desktop (https://desktop.github.com)

Thank you for viewing my repository!

Steve Moskal
