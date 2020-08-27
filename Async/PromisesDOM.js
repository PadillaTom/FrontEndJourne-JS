const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  //Invoke la Function con argumentos ademas del THEN, CATCH.
  // EL RESOLVE ES LLAMAR OTRA VEZ LA FUNC ADDCOLOR.
  addColor(1000, heading1, 'red')
    .then(() => addColor(1000, heading2222, 'green')) // PROVOCAMOS ERROR A PROPOSITO: LUEGO DEL ERROR IGNORA TODO EL RESTO!!!!!!!!!!!
    .then(() => addColor(1000, heading3, 'blue'))
    .catch((err) => console.log(err));
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      // True
      setTimeout(() => {
        // Timer
        element.style.color = color; // Damos color al Elemento
        resolve(); // Simplemente Resolve.
      }, time); // Time Deseado, pasasdo como Argumento
    } else {
      // ERROR.
      reject(new Error(`No hay Elemento: ${element}`));
    }
  });
}
