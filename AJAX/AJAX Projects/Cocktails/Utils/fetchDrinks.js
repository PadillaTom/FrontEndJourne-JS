// ::::::::: Fetch Drinks
//
// Import Loading GIF:
import { showLoading } from './toggleLoading.js';
//
const fetchDrinks = async (url) => {
  // Mostramos Loading: y sacaremos when DISPLAY
  showLoading();
  //   return 1; // Para Comprobar
  try {
    // SI encuentra:
    const response = await fetch(url); // Pasamos el URL
    const data = await response.json(); // Transformamos en Array
    return data; // Devuelve ese Array
  } catch (error) {
    // si NO Encuentra
    console.log(error);
  }
};

// Export Default
export default fetchDrinks;
