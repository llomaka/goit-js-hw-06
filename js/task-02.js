const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.className = 'item';
  li.textContent = ingredient;
  list.appendChild(li);
});
