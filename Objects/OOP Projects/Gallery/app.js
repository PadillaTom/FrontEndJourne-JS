// ::::: Gallery Proto ::::::::

// ::: Functions :::
// We will select elements by: getElement (".class")
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}
//
// :::::::: CONSTRUCTIVE FUNCTION :::::::
// We want to pass in the section of Nature or City, to access all images inside each section.
function Gallery(element) {
  // console.log(element); // Una vez done the selections: Test to see.
  // --> Select all Images in an Array:
  this.list = [...element.querySelectorAll('.img')]; // Necesitamos pasar NodeList to Array --> [...]
  // console.log(this.list); // Vemos que es una Node List... Nos conviene pasar a Array (usamos ES6)
  // --> Select Modal and everything inside it:
  this.modal = getElement('.modal'); // Para dar OPEN
  this.modalImg = getElement('.main-img'); // Para mostrarla en grande
  this.modalImages = getElement('.modal-images'); // Para mostrar debajo
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');
}
//
// ::: Selections :::
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
//
//
