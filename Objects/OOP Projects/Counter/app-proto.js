// :::::: Constructive Functions :::::::
// Creamos la Constructive Function.
function Counter(element, value) {
  //   console.log(element, value); // Vemos los Elementos seleccionados abajo
  this.counter = element; // Referenciamos Element con Counter
  this.value = value; // Refer con Value
  // **Buttons:
  this.resetBtn = element.querySelector('.reset');
  this.decreaseBtn = element.querySelector('.decrease');
  this.increaseBtn = element.querySelector('.increase');
  //   console.log(this.resetBtn); // Vemos como Imprime el Primer y Second BTN
  // **Values en el DOM:
  this.valueDOM = element.querySelector('.value'); // Select
  this.valueDOM.textContent = this.value; // Add it to this Value.
  // **Funcionalidad de Btns attached to the Btns:
  //   this.increaseBtn.addEventListener('click', this.increase.bind(this));
  //   this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
  //   this.resetBtn.addEventListener('click', this.reset.bind(this));
  // Necesitamos el BIND(this) para asociar el incremento al Counter y NO al BTN
  // **O hacerlo de manera mas ordenada:
  // **Bind this:
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.resetBtn.addEventListener('click', this.reset);
}
// Prototypes:
Counter.prototype.increase = function () {
  //   console.log(this); // Vemos que es un BTN
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};
//
//Pasamos la seleccion deseada por la Constructive Function + Valor Inicial.
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

// ----------> Functions in General
// Function that Selects an Element, en caso contrario ERROR
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`Please Check ${selection} selector. No such Element`);
  }
}
// Function that Place Values from Btns: TODAS FUNCIONAN
// firstCounter.increase(); // Vemos que funciona en el DOM y actualiza el Value
// secondCounter.increase(); // Vemos que funciona en el DOM y actualiza el Value
// firstCounter.decrease();
// secondCounter.reset();

// getElement('.first-counter'); // Probamos la seleccion de elemento. TODO OK
// getElement('.first-r'); // Probamos el ERROR. TODO OK
//
// ---> CONCLUSION <---
// Creamos la Constructive Function
// Creamos la Function de GETELEMENT (Selecciona un elemento, SI true: return it, False: ERROR Message)
// Creamos Variables descriptivas que alojen la Seleccion deseada y la pasen por la Constructive Function
// ej:  const Variable = new Counter (getElement (".clase deseada"), valor inicial);
// LA MAGIA: Podemos pasar cantidad infinita a la Constructive Func, solo debemos Seleccionar el elemento deseado.
// --> Select los Botones de dentro (increase, decrease, reset)
// this.resetBtn = element.querySelector('.reset');
// this.decreaseBtn = element.querySelector('.decrease');
// this.increaseBtn = element.querySelector('.increase');
// --> Select el Value + Mostrarlo dentro del DOM
// this.valueDOM = element.querySelector('.value'); // Select
// this.valueDOM.textContent = this.value; // Add it to this Value.
// --> Funcionalidad de los Btns
// Debemos usar Prototypes para cada funcion (increase, decrease, reset)
// Counter.prototype.increase = function () { //Nombre: .increase
// console.log(this); // Test
// this.value++; // Aumenta el Value
// this.valueDOM.textContent = this.value; // Ponemos el Value en el DOM
// };
// Repetimos para Decrease y Reset
// --> Asociar Functionalidad a los Btns --> Usamos BIND(THIS) porque apuntabamos al BTN
// Y NO a la Counter. (si dentro de counter ponemos bind.this, apuntará a si misma).
// Guardamos dichos valores en Variables y... Las asociamos al Evento CLICK
// this.increase = this.increase.bind(this);
// this.decrease = this.decrease.bind(this);
// this.reset = this.reset.bind(this);
// this.increaseBtn.addEventListener('click', this.increase);
// this.decreaseBtn.addEventListener('click', this.decrease);
// this.resetBtn.addEventListener('click', this.reset);
//
//
//

// :::::: Class ::::::::::::
// ver app-class.js
