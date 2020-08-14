// ::::::::::     DOM     ::::::::::
// Document Object Model
// When we have an HTML, the browser turns it into a DOM (each element becomes an object)
// and we can use JS to interact with these elements.
// Document - Root (HTML) - Head and Body - Elements - Values inside of elements (text)

// :::::  General Concepts   :::::
// Think of CSS meanwhile working with DOM
// 1) Think of Element 2) What to do with it
// document.body.style.backgroundColor = 'red';
// document.body.style.color = 'white';
// document.getElementById('btn').style.color = 'white';
// document.getElementById('btn').style.backgroundColor = 'cyan';
// document.getElementById('btn').style.padding = '2rem';
// --> Assign to a variable to do multiple things to an element
// const buttonBody = document.getElementById('btn');
// buttonBody.style.fontSize = '2rem';
// buttonBody.style.borderRadius = '50%';
// WINDOW OBJECT --> Document Property comes from the WINDOW OBJECT
// console.log(window);
// When selecting an object it returns a NODE LIST (like an array/object)
// Thsi means we can use some methos as an array.
// const btn = document.getElementById('btn');
// const name = btn.nodeName;
// const cssBtn = btn.style;
// console.log(btn); // Nos muestra las propiedades del BTN
// console.log(name); // Nos dice que tipo de objeto es
// console.log(cssBtn); // Nos tira todas las propiedades que se pueden usar dentro del NODE OBJECT

// :::::  Window and Document  :::::
// Window Object --> a way for the browser to work with them. (Browser API)
// Document --> Inside of a Window Object, an Object itself.
//  Window represents the tab we are on, and Object represents the HTML file.

// :::::  Get Element by ---> ID <---   :::::
// Selects an element or a group of elements
// We can decide to apply some properties.
// document.getElementById('btn').style.backgroundColor = 'cyan';
// Assign to variable to type a lot less:
// const h1Body = document.getElementById('title'); // acces to Node Object
// h1Body.style.color = 'red';
// h1Body.style.backgroundColor = 'grey';

// :::::  Get Element by ---> TAG NAME <---   :::::
// A partir del TAG : h1,h2, ul, li, etc
// const headings = document.getElementsByTagName('h2');
// console.log(headings); // We see it selects them like an array
// headings[0].style.color = 'violet'; //Ingresamos a los elementos por
// headings[1].style.color = 'blue'; // INDEX
// Usemos Methods
// const ulItems = document.getElementsByTagName('li');
// ulItems.forEach(function (item) {
//   // ERROR PORQUE NO ES UN ARRAY!!!
//   console.log(item); // NO SE PUEDE USAR METHOD FOREACH.
// });
// const betterUlItems = [...ulItems]; // Creamos una variable para alojar los items
// betterUlItems.forEach(function (item) {
//   console.log(item);
// });
// console.log(ulItems);  // It is a NODE OBJECT
// console.log(betterUlItems); // It is an ARRAY

// :::::  Get Elements by ---> CLASS <---  :::::
// Selects multiple Classes, since they can be shared
// const listItems = document.getElementsByClassName('special');
// console.log(listItems); // Returns the Element + Class name. (NODE OBJECT)
// listItems[1].style.color = 'blue';

// :::::  Query Selector and Query Selector All  :::::
// We can pass any CSS we want.
// Query Selector : Single element // Query Selector ALL: Multiple elements.
// const result = document.querySelector('#result');
// result.style.backgroundColor = 'blue'; // Podemos hacerlo por ElbyID
// const singleItem = document.querySelector('.special');
// console.log(singleItem); // SINGLE ITEM : Seleccionado por Query Selector
// const lastItem = document.querySelector('li:last-child');
// console.log(lastItem); // a partir de la segunda class
// const listAll = document.querySelectorAll('.special');
// listAll.forEach(function (item) {
//   console.log(item);
//   item.style.color = 'red';
// }); // Me muestra toda la info y selecciona TODO !

// :::::  Navigate the DOM :::::
//
// -----> CHILDREN <-----
// There will be times where we need to navigate our DOM tree.
// or reverse the DOM tree.
// ej: <ul id> <li without any class or id>
// const resultID = document.querySelector('#result');
// Once we select the Parent we need to select the CHILDREN!
// Child Nodes (includes whitespace= text node) : Children - firstChild - lastChild
// const allChildren = result.childNodes;
// console.log(allChildren); // Vemos muchos items por los TEXT (whitespace)
// const children = result.children;
// console.log(children); // Aqui vemos los LI por separado
// console.log(resultID.firstChild); // vemos que nos tira TEXT!!!
// console.log(resultID.lastChild); // HACER ATENTION!
//
// -----> PARENT<-----
// Por ejemplo unos DIVs containers, Nested Elements
// const h2Head = document.querySelector('h2');
// console.log(h2Head.parentElement); // Nos elije el PARENT ELEMENT, sin tocar el h2
// console.log(h2Head.parentElement.parentElement); //Se puede encadenar
// console.log(h2Head.parentElement.parentElement.parentElement); //Se puede encadenar
// const parent = h2Head.parentElement;
// parent.style.backgroundColor = 'red';
// console.log(parent); // Se plica al DIV!!!!
//
// -----> previousSibling and nextSibling <-----
// Initially they return whitespace. We need to manipulate them
// Ej: Para una UL con LI (with classes or ids)
// const firstLi = document.querySelector('.first');
// console.log(firstLi); // Para corroborar
// const secondLi = firstLi.nextSibling; // tirara espacio
// console.log(secondLi); // ---> Vemos que nos da espacio!!!!! (TEXT)
// Solucion:
// const secondLi = firstLi.nextSibling.nextSibling; //RUN IT TWICE!!!!!
// secondLi.style.color = 'cyan';
// const lastLi = document.querySelector('#last');
// const thirdLi = lastLi.previousSibling.previousSibling;
// thirdLi.style.backgroundColor = 'blue';
// Si nos pasamos del first o last (next or previous) nos tirara NULL!
//
// -----> NextElementSibling and PreviousElementSibling <-----
// mas simple que SIBLING solo, directamente agarra el elemento
// ej: LI 2 color red:
// const firstLi = document.querySelector('.first');
// const secondLi = firstLi.nextElementSibling;
// secondLi.style.color = 'red';

// :::::  Text Content - Node Value  :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//

// :::::  General Concepts   :::::
//
//
//
