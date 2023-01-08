function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "images/restaurant.jpg";
  chefImage.alt = "Restaurant";

  home.appendChild(createParagraph("Bosnian Cuisine"));
  home.appendChild(createParagraph("Made with passion since the exsitece of Bosnia and Herzegovina"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;