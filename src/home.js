function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "images/restaurant.jpg";
  chefImage.alt = "Restaurant";

  const header = document.createElement("h1");
  header.textContent = "Bosnian Cuisine";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Made with passion since the exsitence of Bosnia and Herzegovina";

  const visitUs = document.createElement("p");
  visitUs.textContent = "Visit us!";

  home.appendChild(header);
  home.appendChild(paragraph);
  home.appendChild(chefImage);
  home.appendChild(visitUs);

  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
