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
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

// ----> Comprotamiento de JS y Browser
// btn.addEventListener('click', () => {
//   // Browser espera al Click para devolver el codigo a JS
//   console.log('You Clicked the Button');
// });
// console.log('I am Second'); // JS imprime , esperando la devolucion del Browser
// EventListener se pasa al Browser, JS Ejecuta su Codigo (i am second)
// El browser espera al Evento (click) para devolver el codigo a JS y ser ejectuado
// <----

btn.addEventListener('click', () => {
  setTimeout(() => {
    heading1.style.color = 'red';
    setTimeout(() => {
      heading2.style.color = 'green';
      setTimeout(() => {
        heading3.style.color = 'blue';
      }, 1000);
    }, 1000);
  }, 1000);
});
// El problema es que no es sostenible, IMPOSIBLE DE MANTENER
//
//
