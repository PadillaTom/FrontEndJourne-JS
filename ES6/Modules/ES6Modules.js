// ::::::::::::: ES6 MODULES ::::::::::::::::::
// Module: One statement placed in a separate File.
// We can Reach this module whenever we need this statement
// We don't have to navigate one GIANT file of JS.
// React uses the SAME! SYSTEM!!!
//

//
// :::::::: IMPORTS :::::::::
// --> Named Export
import { random, people } from './Utils/NamedExport.js';

// Aqui veremos instantaneamente un ERROR! (cannot use an IMPORT statement outside a Module)
// Entonces vamos al HTML y dentro del <SCRIPT TYPE="MODULE">
// Luego agregar extension al PATH
// import { random } from './Utils/data.js';
// console.log(random);
//
// --> Default Export
import whatever from './Utils/DefaultExport.js';
//
// --> Get Element
import getE from './Utils/getElement.js';

//
// -----------------------> Setup <--------------------------
// Ejercicio Simple: Tenemos unos Array en js, cuando click shows the array in the div container
// Haremos without Modules:
// const people = [
//   { name: 'Tom', job: 'Dev' },
//   { name: 'Katy', job: 'Design' },
//   { name: 'Rafa', job: 'Boss' },
// ];
// const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// Funcion - Nuevo Array = map de people. Imprimiendo cada Person -
// const showPeople = () => {
//   const newPeople = people
//     .map((person) => {
//       // console.log(person); // Vemos la lista de Person, cada una por separada
//       const { name, job } = person; //Pedimos las Key para cada Person
//       return `<p>${name} <strong>${job} </strong></p>`;
//     })
//     .join(''); // Sacamos la separacion Default = ","
//   //   console.log(newPeople); // Aqui vemos cada item  listos para ser agregados en HTML
//   container.innerHTML = newPeople; // Aqui vemos la lista reflejada en DIV CONTAINER
// };
// Al Click, Invoke Function
// btn.addEventListener('click', () => {
//   showPeople();
// });
// -------------> ESTA ES LA IMPORTADA, ARRIBA ES LA NORMAL
btn.addEventListener('click', () => {
  container.innerHTML = whatever(people); // Pasamos el mismo Argument que el parametro de la Function
}); // Como vemos la INVOKAMOS con el NOMBRE SELECCIONADO AL IMPORTAR!!!!!!!!!!

// -----------------------> Named Export <--------------------------
// Ver data.js
// VER ARRIBA DE TODO TAMBIEN, donde haremos un IMPORT!
// Import {random} from "path"
//

// -----------------------> GET ELEMENT <--------------------------
// Supongamos que cometemos un error: CONTAINER1 NO EXISTE
const container = getE('.container');
const container1 = getE('.container1'); // --> NO SUCH ELEMENT
console.log(container1); // ---> NULL
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//
