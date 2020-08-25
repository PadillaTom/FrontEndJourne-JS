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
  this.closeModal = this.closeModal.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.chosenImage = this.chosenImage.bind(this);
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
// ::: Abrir Modal:
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
  // CLOSE MODAL AND BTNS --> To be deleted when closing modal
  //---> VER BINDS : Necesitamos Bindear los Btns a THIS Gallery , para no targetear el BTN
  this.closeBtn.addEventListener('click', this.closeModal);
  this.prevBtn.addEventListener('click', this.prevImage);
  this.nextBtn.addEventListener('click', this.nextImage);
  this.modalImages.addEventListener('click', this.chosenImage);
};
// ::: Poner la Imagen a Abrir (main) con su Info (name, etc)
Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src; // Source modal = la src de la imagen clickeada
  this.imageName.textContent = selectedImage.title; // el Name = title de la imagen clickeada
};
// ::: Close Btn: Remover Class + Remover Event Listeners (se crean cada vez que abrimos un Modal y podrian acumularse)
Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open'); // Removemos la CLass OPEN
  // Events to Remove
  this.closeBtn.removeEventListener('click', this.closeModal);
  this.prevBtn.removeEventListener('click', this.nextImage);
  this.nextBtn.removeEventListener('click', this.prevImage);
  this.modalImages.removeEventListener('click', this.chosenImage);
};
// ::: Next Btn:
Gallery.prototype.nextImage = function () {
  //Select la imaged selected:
  const selected = this.modalImages.querySelector('.selected'); // Seleccionamos la img con la Class Selected
  const next = // La hermana de Selceted || la priemr child de Gallery
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove('selected'); // remove selected
  next.classList.add('selected'); // add selected a Next, sea cual sea
  this.setMainImage(next); // Agregamos la Next como Main
};
// :: Prev Btn:
Gallery.prototype.prevImage = function () {
  const selected = this.modalImages.querySelector('.selected'); // Seleccionamos la img con la Class Selected
  const prev = // La hermana de Selceted (prev) || la last child de Gallery
    selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove('selected'); // remove selected
  prev.classList.add('selected'); // add selected a PREV, sea cual sea
  this.setMainImage(prev); // Agregamos la prev como Main
};
// :: Selected Images as Main:
Gallery.prototype.chosenImage = function (event) {
  if (event.target.classList.contains('modal-img')) {
    // console.log(event.target); // Vemos la Src
    const selected = this.modalImages.querySelector('.selected'); // Seleccionamos
    selected.classList.remove('selected'); // Removemos
    this.setMainImage(event.target); // Evento y poner la Main
    event.target.classList.add('selected'); // Agregar Selected a la Targeteada
  }
};
// ::: Selections :::
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));

//
// :::  :::
