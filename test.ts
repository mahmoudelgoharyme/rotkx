// Create an <h1> element
const heading = document.createElement("h1");

// Create text node with the text "Hello"
const text = document.createTextNode("Hello");

// Append the text node to the <h1> element
heading.appendChild(text);

// Append the <h1> element to the document body (you can also target a specific element by using querySelector, getElementById, etc.)
document.body.appendChild(heading);
