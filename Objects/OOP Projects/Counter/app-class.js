// ::::::::::: Class ::::::::::::
// Copy Paste de lo creado antes, para ponerlo dentro de CLASS
//
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
//
class Counter {
  constructor(element, value) {
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
  // ** En vez de PROTOTYPES: Usaremos estas functions:
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}
//Pasamos la seleccion deseada por la Constructive Function + Valor Inicial.
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
