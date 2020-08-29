// Single Drink
import fetchDrinks from './Utils/fetchDrinks.js';
import displayDrink from './Utils/displaySingleDrink.js';

// Main Func:

const presentDrink = async () => {
  //   console.log('Hello Single Drink'); // Probamos que funcione
  // Buscamos la ID en local:
  const id = localStorage.getItem('drink');
  // SI NO HAY ID EN LOCAL:
  if (!id) {
    // Back to HTML
    window.location.replace('index.html');
  } else {
    // ELSE: Ir a la Url para ID
    // Pasamos la ID a la URL de cada cocktail para tomar los datos
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drink); // Vemos el Object DRINK, con el Array y el index 0 nuestro interes
  }
};

// Page Loads:
window.addEventListener('DOMContentLoaded', presentDrink);
