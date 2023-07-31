function createGlossaryLink(term) {
  // Get the URL of the glossary page.
  var glossaryUrl = "https://www.example.com/glossary.html";

  // Create the link text.
  var linkText = term;

  // Create the link element.
  var linkElement = document.createElement("a");
  linkElement.href = glossaryUrl;
  linkElement.textContent = linkText;

  // Return the link element.
  return linkElement;
}

// Get all of the terms on the page.
var terms = document.querySelectorAll(".term");

// Create a link for each term.
for (var i = 0; i < terms.length; i++) {
  var term = terms[i];
  var link = createGlossaryLink(term.textContent);
  term.appendChild(link);
}
