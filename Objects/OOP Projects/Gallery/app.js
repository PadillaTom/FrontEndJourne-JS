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
  this.container = element;
  // console.log(element); // Una vez done the selections: Test to see.
  //
  // ---> Select all Images in an Array:
  this.list = [...element.querySelectorAll('.img')]; // Necesitamos pasar NodeList to Array --> [...]
  // console.log(this.list); // Vemos que es una Node List... Nos conviene pasar a Array (usamos ES6)
  //
  // ---> Select Modal and everything inside it:
  this.modal = getElement('.modal'); // Para dar OPEN
  this.modalImg = getElement('.main-img'); // Para mostrarla en grande
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images'); // Para mostrar debajo
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');
  //
  // ---> Bind Functions --> Para cuando queremos usar THIS y apunte a esta misma Function
  let self = this;
  //
  // ---> Events
  this.container.addEventListener('click', function (event) {
    if (event.target.classList.contains('img')) {
      // Si lo clickeado contiene "IMG"
      self.openModal(event.target, self.list); // abrimos el Target + el Array creado con sus Siblings
    }
  }); // When Click --> Open Modal
}
// ---> Prototypes
// Abrir Modal:
Gallery.prototype.openModal = function (selectedImage, list) {
  // OPEN MODAL
  // console.log(this); // Vemos que apunta a City o Nature, Queremos apuntar la Gallery ---> USAMOS SELF = THIS. y dentro de la Funct self.blablalba
  // console.log('open modal'); // Vemos si funciona para abrir
  // console.log(selectedImage, list); // Para ver que funcione
  this.setMainImage(selectedImage); // Vemos el Title de la Imagen Clickeada + Imagen
  this.modalImages.innerHTML = list
    .map(function (image) {
      // MAP nos permite iterar las imagenes
      // return console.log(image); // Probamos Ver la imagen clickeada
      return `<img src= "${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class= "${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}" />`;
    }) // Mostramos cada atributo, para CLASS = Match the ID of selected to the id in Array then swho: "Modal-image selected"
    .join(''); // Nos permite mostrar el Array Completo.
  this.modal.classList.add('open'); // Agregamos OPEN a modal.
};
// Poner la Imagen a Abrir (main) con su Info (name, etc)
Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src; // Source modal = la src de la imagen clickeada
  this.imageName.textContent = selectedImage.title; // el Name = title de la imagen clickeada
};
// ::: Selections :::
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));

//
// :::  :::
