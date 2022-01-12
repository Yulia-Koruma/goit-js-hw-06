const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElementsEl = document.createElement('li');
listElementsEl.classList.add('item');
listElementsEl.textContent = `${ingredients[0]}`;
console.log(listElementsEl);