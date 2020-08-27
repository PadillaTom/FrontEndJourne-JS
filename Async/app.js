// ::::::::::: SYNCHRONOUS ::::::::::::
// Regardless the size of the code, JS executes them one after the other
// will read the next line only when its done with the current one.
// console.log('im 1');
// console.log('im 2');
// console.log('im 3');
// Probamos esto con BOILING WATER:
// function boilingWater() {
//   console.log('Boiling...');
//   for (let i = 0; i < 1000; i++) {
//     console.log('...Still not done...');
//   }
//   console.log('...Done');
// }
// // Demostramos:
// console.log('Line 1');
// boilingWater();
// console.log('Line 3');
//
// ---> MAKE A SOUP <---
// Asi Lee JS:
// Chop Onions, Chop Carrots, BoilWater (10min), Add Carrots(5min), Add Onions(5min)
// Ideal sería:
// BoilWater(10min), meanwhile ---> Chop Carrots, Add Carrots ---> Chop Onions, Add Onions
// PERO! NO SUCEDE ASI, siempre tenemos que esperar los 10min!!!!
// Solucion: Hacer correr el BoilingWater de fondo, mientras ejecutamos las Carrots

// ::::::::::: ASYNCHRONOUS ::::::::::::
// The Browser provides us with some Functions --->
// Fetch Data, Get Geolocation, SetTimer, etc....
// Continuamos con la SOUP:
// function BoilWater(time) {
//   console.log('Boiling...'); // Imprime
//   setTimeout(() => {
//     // Permite ejecutar el resto mientras esto corre de fondo
//     console.log('...Done.'); // Una vez terminada: Done
//   }, time);
// }
// BoilWater(2000); // Damos el Time Deseado
// console.log('Chopping Carrots'); // Vemos como Carrots aparece entre Boiling y Done!

// Como Funciona? Browser nos da la oportunidad de usar SetTimeout dentro de JS.
// Browser presta la Function, JS la ejecuta, pero El Browser se da cuenta y ejecuta la CallBack Function mientras JS lee la siguiente linea
// When the time sets out... Browser dice: "Hey JS, you gave me this for 10min, here have it back"
// If JS is occuppied with anything, Browser keeps the function until JS is free.
//
// :::::::::: SetTimeout : El time dado es como "mínimo", puede demorar mas.
//
// Demostramos a JS Ocupado y no puede ejecutar la CB Function enseguida.
// BoilWater(1000);
// console.log('Chopping Carrots');
// for (let i = 0; i < 3000; i++) {
//   console.log('JS: I am Busy');
// }
// Vemos como Imprime DONE luego de los 3000, sin importar que BoilWater dure 1000.
//
// INCLUSO SI PONEMOS BOILWATER(0) ... JS PASA LA FUNCT A BROWSER MIENTRAS QUE CONTINUA CON SU PROPIO CODIGO.
//
//
// ::::::::::: CallBacks, Promisis, Async/Await ::::::::::::::
// Sirven para planear QUE hacer una vez que la function termine de correr
//
//
// ---------> Call Back Hell <---------
// Queremos boilWater(10s), once done Add Carrots and wait another 5s, same with onions
// boilWater();
// console.log('Chopping Carrots');

// function boilWater() {
//   console.log('Boiling...');
//   setTimeout(() => {
//     console.log('...Done');
//     console.log('Adding Carrots');
//     setTimeout(() => {
//       console.log('Carrots Boiled');
//       console.log('Adding Onions');
//       setTimeout(() => {
//         console.log('Onions Boiled');
//       }, 5000);
//     }, 5000);
//     console.log('Chopping Onions');
//   }, 10000);
// }
// Resultado? --> Boiling, Chopping, Done. Adding Carrots, Carrots Boiled.
// Agregamos Onions --> Boiling, Chop C, Done, Add C, Chop O, C Boiled, Add O, O Boiled.
// De todas maneras no es sostenible! ---> CALLBACK HELL!!!!!
//
// ---------> Call Back Hell in DOM <---------
// Example: I want to have 3 Hs and a button. When Clicked change Hs Color.
// BUT ---> One After Another. NOT INSTANTLY
// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');
// const btn = document.querySelector('.btn');

// ----> Comprotamiento de JS y Browser
// btn.addEventListener('click', () => {
//   // Browser espera al Click para devolver el codigo a JS
//   console.log('You Clicked the Button');
// });
// console.log('I am Second'); // JS imprime , esperando la devolucion del Browser
// EventListener se pasa al Browser, JS Ejecuta su Codigo (i am second)
// El browser espera al Evento (click) para devolver el codigo a JS y ser ejectuado
// <----

// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     heading1.style.color = 'red';
//     setTimeout(() => {
//       heading2.style.color = 'green';
//       setTimeout(() => {
//         heading3.style.color = 'blue';
//       }, 1000);
//     }, 1000);
//   }, 1000);
// });
// El problema es que no es sostenible, IMPOSIBLE DE MANTENER
//
// ********** GUARDAMOS EL EJEMPLO EN CALLBACKHELL.JS **************
//
//

// ------------> Promises <--------------
// Una secuencia de acciones. Buscamos eliminar el CHOCLO
// Pueden ser Pending, Resolved, Rejected
// Ejemplo:
// Restaurante --> Pagamos, esperamos, Recibimos Comida, Recibo.
// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//
// });
//
// PROMISE: Usamos NEW PROMISE y pasamos la cb function, que a su vez lleva 2 cb functions como parameters
// Generalmente se usa; Resaolve and Reject
// const promise = new Promise((resolve, reject) => {
//   let value = true;
//   if (!value) {
//     // Probamos un True False para resolve, reject
//     resolve('Value is True, Resolved');
//   } else {
//     reject('Value False, Rejected');
//   }
// });
// console.log(promise.value); // Undef, no podemos acceder al Value.
// Si queremos acceder: Tenemos que pasar la CB Function, con cualquier parametro que querramos
// promise.then((taco) => console.log(taco));
// Devolverá lo que querramos, en el TYPE que haya sido pasado en la Funct.
// Si resolve ([1,2,3]) --> Devolvera un Array.
//
// What if: !Value ---> Nos dará un ERROR. necesitamos:
// promise
//   .then((taco) => console.log(taco))
//   .catch((pancho) => console.log(pancho));

//
// THEN ((PARAMETER) => LOG(PARAMETER)) --------> Si es Resolved
// THEN ((PARAMETER) => LOG(PARAMETER)).CATCH ((PARAMETER) => LOG (PARAMETER))
// ---------> Si es Rejected.

//
// ::::::::::: REJECT EXAMPLE ::::::::::::
// Queremos pedir Imagenes online -->
// SI ( Estan disponibles : Display ) , SI NO ( Mostrar un ERROR en consola)
//
//

// ::::::::::: SYNCHRONOUS ::::::::::::
//
//
//

// ::::::::::: SYNCHRONOUS ::::::::::::
//
//
//

// ::::::::::: SYNCHRONOUS ::::::::::::
//
//
//

// ::::::::::: SYNCHRONOUS ::::::::::::
//
//
//

// ::::::::::: SYNCHRONOUS ::::::::::::
//
//
//

// ::::::::::: SYNCHRONOUS ::::::::::::
//
//
//
