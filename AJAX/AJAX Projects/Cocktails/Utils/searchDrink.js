// ::::::: Search for Drinks
// No lo exportaremos, pero funcionará automaticamente.
// Cada vez que algo aparezca aqui será enviado directamente

// console.log('helloe'); // Probamos m todo OK

// Al ser importado direcamente, funciona como una extesnion!
//
// Aqui el Programa:
import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
// Seleccionamos: Search y El input dado
const form = get('.search-form');
const input = get(`[name = "drink"]`);
//
// Event:
form.addEventListener('keyup', function (e) {
  e.preventDefault(); // Prevenimos Refresh
  //   console.log(input.value); // Vemos como se modifica el input a medida que escribimos
  const value = input.value; // Valor es el del input
  // Condicion:
  if (!value) {
    // Si no hay input
    return; // just return
  } // SI HAY input: Presentar
  presentDrinks(`${baseURL}${value}`); // Link + Busqueda
});
