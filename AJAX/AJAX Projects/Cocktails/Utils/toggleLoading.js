// Quitara y pondra el Loading GIF
// Imports:
import get from './getElement.js';
// Seleccion:
const loading = get('.loading');

// Export
export const showLoading = () => {
  loading.classList.remove('hide-loading');
};
export const hideLoading = () => {
  loading.classList.add('hide-loading');
};
//
// AHORA ---> Importaremos segun sea necesario:
// Ej: En fetchDrinks necesitamos mosrtrar el Loading hasta que se
// muestren las Drinks
