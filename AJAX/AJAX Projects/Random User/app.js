// Vamos a comunicar con un API que me da los datos de User.
// Segun la Documentacion:
// URL:'https://randomuser.me/api/'
// Y vemos que el JSON tiene muchas propiedades, solo usaremos las que elegimos en el HTML
// Podemos especificar Mujeres, Hombres, etc. Lo haremos General
//
//
// *** Creamos una Function que nos Seleccione el elemento
// const getElement = (selection) => {
//   const element = document.querySelector(selection);
//   if (element) return element;
//   throw new Error('No such element');
// };
// Una vez Creada y funcionando: la enviamos a otro Module y la Importamos Aqui.
// *** Importamos
import get from './Utils/getElement.js';
import fetchUser from './Utils/fetchUser.js';
// ---------->  Selections:
// const URL = 'https://randomuser.me/api/';
const img = get('.user-img');
// console.log(img); // Vemos que funciona
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')]; // Transofmra NodeList en Array
// console.log(btns);// Vemos el Array
//
// ----------> Functionality:
// Get user from API
// Display
// Funcionalidad BTNS
//

// Get user from API:
// Al ser ASYNC it is returning a Promise by default.
// Luego en ShowUSer usaremos ASYNC as well con su await.
// const getUser = async () => {
//   const response = await fetch(URL);
//   //   console.log(response); // Status 200
//   const data = await response.json();
//   //   console.log(data); // Object que contiene RESULTS (Array) y lo que nos interesa es el index 0
//   // DESTRUCTURE THE OBJECT:
//   const person = data.results[0]; // Object Completo, vemos dentro y elegimos lo que queremos
//   const { phone, email } = person;
//   const { large: image } = person.picture;
//   const { password } = person.login;
//   const { first, last } = person.name;
//   const { age } = person.dob;
//   const {
//     street: { number, name }, // Queremos esto dentro de street, doble nested
//   } = person.location;
//   // Return lo necesario, previamente Seleccionado:
//   return {
//     // Devuelve dicha Data que pondremos dentro de data-label; entonces debe coincidir el Nombre
//     image,
//     phone,
//     email,
//     password,
//     age,
//     street: `${number} ${name}`,
//     name: `${first} ${last}`,
//   };
// };

// ----> MAIN FUNCTION:
// Cuando queremos mostrar esta func? Window Load and Click BTN
const showUser = async () => {
  //   console.log('Hello World'); // Vemos Que los Events funcionan
  // Get User from API: Al ser ASYNC -->
  const person = await fetchUser();
  console.log(person); // Vemos los datos, en formato OBJECT
  // Display User
};
window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
