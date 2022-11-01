const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((item) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = item;

  return itemEl;
});

ingredientsList.append(...ingredientsItems);

console.log(ingredientsList);
