// :::::::::: Display Drinks
//
//
// ***** Imports:
import getElement from './getElement.js';
//

// Get me the DRINKS property form the DATA Object
const displayDrinks = ({ drinks }) => {
  // ---> Comprobamos
  console.log(drinks); // Comprobamos el Array
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
  const newDrinks = drinks
    .map((drink) => {
      // Return
      return ` <a href="./drink.html">
          <article class="cocktail" data-id="1">
            <img src="./cocktail.jpg" alt="concktail" />
            <h3>Martini</h3>
          </article>
        </a>`;
    })
    .join('');
  // ---> Hide Loading:
  title.textContent = '';
};
// Export Default
export default displayDrinks;
