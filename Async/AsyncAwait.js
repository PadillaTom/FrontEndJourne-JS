// :::::::::::::: ASYNC AWAIT ::::::::::::::
// Syntax:
// async function someFunction(){
//     await
// }

// // Syntax Arrow Function:
// const otherFunction = async() =>{
//     await
// }
//

// Reescribimos el mismo EJ que antes (PromisesDOM)
// Await: Espera a la Promise: Fullfilled or Rejected
//
//
//
//
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
//
// ASYNC AWAIT:
//
// btn.addEventListener('click', async () => {
//   //Necesitariamos asignar una variable, porque usamos Resolve() simple:
//   const first = await addColor(1000, heading1, 'red');
//   await addColor(1000, heading2, 'green');
//   await addColor(1000, heading3, 'blue');
//   // Await espera la Promise anterior a ser Resuelta, sino NO CONTINUA CON EL CODIGO
//   console.log(first); // Espera a ejecutar todos, luego nos muestra el --> resolve("data form server")
// });
//
//
// MANEJO DE ERRORES:
//
// btn.addEventListener('click', async () => {
//   try {
//     const secondTry = await addColor(1000, heading1, 'red');
//     await addColor(1000, heading22222, 'green');
//     await addColor(1000, heading3, 'blue');
//     console.log(secondTry);
//   } catch (error) {
//     console.log(error); // Vemos el Error en CONSOLA
//   }
// });
//
//
//
//
// ASYNC SIEMPRE RETURN A PROMISE: Lo veremos mas adelante
// async function displayColor() {
//   try {
//     const secondTry = await addColor(1000, heading1, 'red');
//     await addColor(1000, heading2, 'green');
//     await addColor(1000, heading3, 'blue');
//     console.log(secondTry);
//   } catch (error) {
//     console.log(error); // Vemos el Error en CONSOLA
//   }
//   return 'Returning from ASYNC withouth writing NEW PROMISE';
// }
// //Corremos el evento:
// btn.addEventListener('click', async () => {
//   //One Way:
//   //   displayColor().then((salchicha) => console.log(salchicha));
//   //Other Way:
//   const result = await displayColor();
//   console.log(result);
// });

// ::::::::::::::::::::: Function Usada ::::::::::::::::::::::::::::::
function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      // True
      setTimeout(() => {
        // Timer
        element.style.color = color; // Damos color al Elemento
        resolve('This is Data from Server'); // Simplemente Resolve.
      }, time); // Time Deseado, pasasdo como Argumento
    } else {
      // ERROR.
      reject(new Error(`No hay Elemento: ${element}`));
    }
  });
}
