// :::::::::: Display Drinks
//
//
// ***** Imports:
import getElement from './getElement.js';
//

// Get me the DRINKS property form the DATA Object
const displayDrinks = ({ drinks }) => {
  // ---> Comprobamos
  //   console.log(drinks); // Comprobamos el Array sacado de DATA
  //   return 1; // Comprobamos el Modulo
  // ---> Selecciones:
  const section = getElement('.section-center');
  const title = getElement('.title');
  // ---> Funcionalidad:
  if (!drinks) {
    // NO ENCUENTRA DRINK
    title.textContent = `No such Drinks`; // Texto
    section.innerHTML = null; // Cancelamos las Imagenes
    return;
  }
  const newDrinks = drinks // Mapeamos un Nuevo Array
    .map((drink) => {
      //   console.log(drink); // Para ver cada item del Array (object y encontrar los Values Necesarios para HTML Dynamic)
      // Destructuring the Object inside the array (DRINK):
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      // Para cada Item del Array:
      return ` <a href="./drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="concktail" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join(''); // Sacamos las COMMAS
  // ---> Hide Loading:
  title.textContent = ''; // Escondemos Title
  section.innerHTML = newDrinks;
  return section; // Vemos que la Section sea la Correcta
};
// Export Default
export default displayDrinks;
