function loadPage() {
  // Create elements
  const image = document.createElement("img");
  const headline = document.createElement("h1");
  const paragraph = document.createElement("p");

  // Set element attributes
  image.src = "/src/restaurant.jpg";
  image.alt = "Restaurant image";
  headline.textContent = "Welcome to Our Restaurant";
  paragraph.textContent =
    "We are a wonderful restaurant that serves delicious food. Our friendly staff and comfortable atmosphere make us the perfect place to dine with friends and family. We hope to see you soon!";

  // Append elements to content div
  const content = document.querySelector("#content");
  content.appendChild(image);
  content.appendChild(headline);
  content.appendChild(paragraph);
}

module.exports = loadPage;
