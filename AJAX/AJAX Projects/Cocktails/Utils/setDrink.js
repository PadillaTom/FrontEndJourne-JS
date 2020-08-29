// Tomaremos los Datos para Cada DRINK
// Y luego las dispondremos en el DOM
//
// NECESITAMOS LA ID DEL COCKTAIL INDIVIDUAL
// PARA PODER INGRESAR AL WEBSITE Y SACAR LA INFO DESEADA
//
// Main Func:
const setDrink = (section) => {
  //   console.log('Hello'); // Probamos que esten bien asociados.
  // Escuchar por clicks:
  section.addEventListener('click', function (e) {
    // e.preventDefault(); // Frenamos el cambio de page, para poder trabajar
    // console.log(e.target); // Vemos que clickeamos la IMAGEN o HEADING (Donde esta la ID?)
    // La ID esta en el Parent ( ARTICLE ) -->
    const id = e.target.parentElement.dataset.id;
    // console.log(id); // Vemos que sacamos la ID del Dataset del Parent
    // Donde podemos GUardar el ID para que con cada cambio de pagina (Default behavior) no se pierda el Numero
    // Solucion: Local Storage
    localStorage.setItem('drink', id); // Se agrega a la Local Storage Drink:ID
  });
};

// Export
export default setDrink;
