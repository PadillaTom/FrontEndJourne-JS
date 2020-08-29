//Imports:
import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';
//
// Main Func:
const displayDrink = (data) => {
  //   console.log(drink); // Controlamos que funcione
  hideLoading(); // Escondemos el GIF
  // Pasar data a Drink Object, con toda la info
  const drink = data.drinks[0]; // Le damos El Index 0 del Array
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  //   console.log(drink); // Vemos que en Ingredientes puede haber muchos, creamos un IF
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  console.log(drink, list); // Vemos la Drink + List de ingredientes y algunos NULL
  // Seleccionamos las Classes
  const img = get('.drink-img');
  const drinkName = get('.drink-name');
  const description = get('.drink-desc');
  const ingredients = get('.drink-ingredients');
  // Asociamos: Display
  img.src = image;
  document.title = name; // Cambiamos el Title acorde el Cocktail
  drinkName.textContent = name;
  description.textContent = desc;
  // Iteramos la LIST para DISPLAY:
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) {
        // SI NULL: Return undefined
        return;
      }
      return `<li><i class="far fa-check-square"></i> ${item}</li>`; // NO NULL, agregar un LI al DOM
    })
    .join(''); // Sacamos Commas
};
// Export
export default displayDrink;
