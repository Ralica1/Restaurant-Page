function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Begova čorba",
      "Beef, Carrots, Onions, Tomatoes, Potatoes, Rice, Paprika, Vegetable oil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Ćevapi",
      "Minced meat, Grill, Bread (lepina), Onion, Kaymak"
    )
  );
  menu.appendChild(
    createMenuItem("Bosanski lonac", "Cabbage, Meat,Spices, made in clay pot")
  );
  menu.appendChild(createMenuItem("Burek", "Burek pastry, Meat (burek)"));
  menu.appendChild(
    createMenuItem(
      "Uštipci",
      "Dough, Smoked meat, Homemade cheese, Kaymak, Vegetables"
    )
  );

  return menu;
}

function createMenuItem(name, ingredients) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h4");
  foodName.textContent = name;

  const foodIngredients = document.createElement("p");
  foodIngredients.textContent = ingredients;

  const foodImage = document.createElement("img");
  foodImage.src = `images/foods/${name.toLowerCase()}.jpg`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodIngredients);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
