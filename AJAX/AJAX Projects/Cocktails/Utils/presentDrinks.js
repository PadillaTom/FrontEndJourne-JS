// :::::::: Present Drink
// To show some Drinks when we load the page
// While we wait , there is the LOADING gif.
//
// **** Imports
import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
//
const showDrinks = async (url) => {
  // ---> Comprobar los Modulos
  //   console.log(url); // Comprobamos el Module
  //   const data = await fetchDrinks(url); // Asociamos
  //   console.log(data); // Comprobamos el Module --> Vemos el ARRAY
  //
  // ---> Fetch Drink from API
  const data = await fetchDrinks(url);
  console.log(data);
  // ---> Display Drink from API
  const section = await displayDrinks(data);
  console.log(section); // Comprobamos
};

// Export Default
export default showDrinks;
