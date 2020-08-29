// ********* Imports
import getElement from './Utils/getElement.js';
import presentDrinks from './Utils/presentDrinks.js';
import './Utils/searchDrink.js';
// ********* URL
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
const URLID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552';
//

// ******** Present Drinks:
window.addEventListener('DOMContentLoaded', () => {
  // ---> Present Drinks with the URL we have HERE
  presentDrinks(URL);
});
