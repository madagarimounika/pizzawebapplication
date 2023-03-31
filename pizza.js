const pizzaBase = document.getElementById('pizza-base');
const pizzaBases = document.getElementById('pizza-bases');
const ingredients = document.getElementById('ingredients');

let selectedBase = null;
let addedIngredients = [];

pizzaBases.addEventListener('dragstart', (event) => {
  selectedBase = event.target;
});

pizzaBase.addEventListener('dragover', (event) => {
  event.preventDefault();
});

pizzaBase.addEventListener('drop', () => {
  pizzaBase.appendChild(selectedBase.cloneNode(true));
});

ingredients.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.dataset.name);
});

pizzaBase.addEventListener('dragover', (event) => {
  event.preventDefault();
});

pizzaBase.addEventListener('drop', (event) => {
  event.preventDefault();
  const ingredientName = event.dataTransfer.getData('text');
  if (!addedIngredients.includes(ingredientName)) {
    addedIngredients.push(ingredientName);
    const ingredient = document.createElement('div');
    ingredient.classList.add('ingredient');
    ingredient.textContent = ingredientName;
    pizzaBase.appendChild(ingredient);
  }
});
const pizzaBasesList = [
  { name: 'Regular', image: 'images/regular-base.jpg' },
  { name: 'Thin Crust', image: 'images/thin-crust-base.jpg' },
  { name: 'Deep Dish', image: 'images/deep-dish-base.jpg' },
];

const ingredientsList = [
  { name: 'Pe
