// :::::: Constructive Functions :::::::
// Creamos la Constructive Function.
function Counter(element, value) {
  //   console.log(element, value); // Vemos los Elementos seleccionados abajo
  this.counter = element; // Referenciamos Element con Counter
  this.value = value; // Refer con Value
  // Buttons:
  this.resetBtn = element.querySelector('.reset');
  this.decreaseBtn = element.querySelector('.decrease');
  this.increaseBtn = element.querySelector('.increase');
  //   console.log(this.resetBtn); // Vemos como Imprime el Primer y Second BTN
  // Values en el DOM:
  this.valueDOM = element.querySelector('.value'); // Select
  this.valueDOM.textContent = this.value; // Add it to this Value.
}
//
//Pasamos la seleccion deseada por la Constructive Function + Valor Inicial.
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

// Function that Selects an Element, en caso contrario ERROR
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`Please Check ${selection} selector. No such Element`);
  }
}
// getElement('.first-counter'); // Probamos la seleccion de elemento. TODO OK
// getElement('.first-r'); // Probamos el ERROR. TODO OK
//
// ---> CONCLUSION <---
// Creamos la Constructive Function
// Creamos la Function de GETELEMENT (Selecciona un elemento, SI true: return it, False: ERROR Message)
// Creamos Variables descriptivas que alojen la Seleccion deseada y la pasen por la Constructive Function
// ej:   const Variable = new Counter (getElement (".clase deseada"), valor inicial);
// LA MAGIA: Podemos pasar cantidad infinita a la Constructive Func, solo debemos Seleccionar el elemento deseado.
// Ahora queremos Seleccionar los Botones de dentro (increase, decrease, reset)
// this.resetBtn = element.querySelector('.reset');
// this.decreaseBtn = element.querySelector('.decrease');
// this.increaseBtn = element.querySelector('.increase');
// Select el Value + Mostrarlo dentro del DOM
// this.valueDOM = element.querySelector('.value'); // Select
// this.valueDOM.textContent = this.value; // Add it to this Value.
//
//
//
//
// :::::: Class ::::::::::::
