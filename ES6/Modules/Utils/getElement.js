function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error('NO SUCH ELEMENT');
  }
}

export default getElement;

// Dicha Function nos dirá si cometemos un error al seleccionar elementos
// Y al ser improtada, tendremos un codigo mucho mas simple de leer
// y de recordar, además de pasar nuestro propio mensaje de error
