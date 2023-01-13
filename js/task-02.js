const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const components = document.getElementById("ingredients");

for(const ingredient of ingredients) {
const liElem = document.createElement("li");
liElem.classList.add('item');
console.log(liElem);
liElem.textContent = ingredient;
components.appendChild(liElem);
};