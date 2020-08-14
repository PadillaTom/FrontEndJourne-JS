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
// Returns the text value that is inside our element
// const itemText = document.getElementById('special');
// NODE VALUE:
// const value = itemText.nodeValue;
// console.log(value); // NULL , no se usa asi nomas el NodeValue
//Como usarlo:
// console.log(itemText.childNodes[0].nodeValue); // Nos muestra la lista CHILDNODES y elegimos el item
// console.log(itemText.firstChild.nodeValue); // Otra manera si es el primer ITEM.
//
// TEXT CONTENT
// const easyValue = itemText.textContent;
// console.log(easyValue); // Nos devuelve el text directamente!

// ::::: Get Attribute() and Set Attribute()   :::::
// Por ejemplo: class, id, etc...
// Agregaremos Dinamically
// const firstClass = document.querySelector('.first');
// const classValue = firstClass.getAttribute('class');
// console.log(classValue); // Devuelve el FIRST
// const idValue = firstClass.getAttribute('id');
// console.log(idValue); // Devuelve SPECIAL
//
// const link = document.getElementById('link');
// const showLink = link.getAttribute('href'); // Asociamos la ID
// console.log(showLink); // Devuelve el href=" # " . ASTERISCO
//
// Llegar a un elemento sin ID ni CLASS. Navegar el DOM
// const last = link.nextElementSibling;
// last.setAttribute('class', 'first'); // (ATT, Value)
// last.textContent = 'I also have a FIRST CLASS';  // CAMBIA COMPLETAMENTE EL TEXTO DENTRO DEL ELEMENTO
// console.log(last);
// Cuando veamos LINKS se agregará este mismo ITEM a la lista de NODE !
//
// const links = document.querySelectorAll('.first');
// console.log(links); // Nos devuelve List de todos los FIRST class

// :::::  ClassList and ClassName  :::::
// We have some styled classes already in CSS , but no element has been associated with them.
// we hav some elements in HTML.
// We will Apply, Remove, Check those classes.

// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');
// ---> CHECK <---
// const classValue = first.className;
// console.log(classValue); // Devuelve Class Name
// ---> ADD <---
// second.className = 'colors'; // Damos Nombre a una nueva Clase
// second.className = ' colors text';
// Se sobre escribe si usamos en distrintos renglones!
// Hacer atencion. Para esto tenemos Classlist:
// Class List:
// third.classList.add('colors');
// third.classList.add('text');
// Add multiple times:
// third.classList.add('colors', 'text');
// const classValue3 = third.classList; // Hacemos esto para Ver el elemento en LOG
// console.log(classValue3);
// ---> REMOVE <---
// third.classList.remove('text');
// ---> CONTAINS <---
//"Condition" para ver si tiene dicha clase y pasar un parametro.
// let result = third.classList.contains('colors');
// if (result) {
//   console.log('Hello World');
// } else {
//   console.log('No COLORS inside');
// } // Output = HELLO WORLD

// :::::  CreateElement - CreateTextNode - AppendChild  :::::
// Usaremos las classes ya creadas y estilizadas en CSS
// ---> createElement ("Element") <---
// const bodyDiv = document.createElement('div');
// ---> createTextNode ("text content") <---
// const text = document.createTextNode('dynamic body Div');
// ---> element.appendChild (childElement) <---
// bodyDiv.appendChild(text); // Asociamos el text al bodyDiv.
//
// Paso final: Agregar dicho elemento en el BODY GLOBAL
// document.body.appendChild(bodyDiv);
//
// Ejemplo: Creamos el elemento, le damos un texto, y le agregamos una CLASS previamente estilizada en CSS
// const result = document.querySelector('#result');
// console.log(result.children); // Vemos los Child de result previamente
// const headingDiv = document.createElement('h2');
// const headingText = document.createTextNode('Dynamic Heading');
// headingDiv.appendChild(headingText);
// headingDiv.classList.add('blue');
// Una vez creado el elemento lo agregamos al RESULT (Div que ya existia en el body)
// result.appendChild(headingDiv);
// console.log(result.children);

// :::::  InsertBefore  :::::
// by Default everything added to Body Dynamically gets isnerted after the JS
// Usaremos el BodyDiv creado previamente y que fue insertado al final
// insertBefore (que elemento, donde)
//
// Antes de  "document.body.appendChild(bodyDiv);"
//en el video anterior , INSETAREMOS bodyDiv before the RESULT (original div)
// document.body.insertBefore(bodyDiv, result); // Lo insertamos antes del DIV
//
// Probamos lo mismo con el RESULT DYNAMICO (comentamos su append "result.appendChild(headingDiv);")
// const first = document.querySelector('.colors');
// result.insertBefore(headingDiv, first);

// :::::  Replace Child   :::::
// replaceChild (new element, old element)
// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode(`I'm Small H6`);
// smallHeading.classList.add('colors');
// smallHeading.appendChild(smallText);
// document.body.replaceChild(smallHeading, bodyDiv);
// Hemos Quitado el "Dynamic body Div" y metido el H6

// ::::: Prepend - InnerText  :::::
// Aceleraria el proceso de agregar texto.
// Instead of creating a TextNode, then Append:
// const heading2 = document.createElement('h2');
// heading2.innerText = `I'm dynamic text h2`;
// document.body.prepend(heading2);
//prepend by default los pone ARRIBA DE TODO

// ::::: Remove - RemoveChild  :::::
// Remove elements of the DOM, They are still in HTML, but not visibles
// const result = document.querySelector('#result');
// result.remove(); // Sacamos el DIV que contiene Second Heading
// RemoveChild : Seleccionamos la Parent.query(elemento)
// const heading = result.querySelector('h1');
// console.log(heading);
// result.removeChild(heading);

// :::::  innerHTML - textContent   :::::
// const list = document.getElementById('first'); //ul
// const div = document.getElementById('second'); //div container
// const item = document.querySelector('.item'); //li
//
// console.log(div.textContent); // Nos tira solo el text
// console.log(list.textContent); // Nos tira solo el text
// console.log(list.innerHTML); // Nos tira todo el content de HTML
//
// Queremos crear una UL y meter los mismos LI
// const newUl = document.createElement('ul'); //Creamos elemento UL
// newUl.innerHTML =
// Usamos TEMPLATE
//   ` <li class="item">List Item1</li>
// <li>List Item2</li>`; // Copy Paste la lista desde el HTML
// document.body.appendChild(newUl); // Appendchild el nuevo elemento
//
// SI QUEREMOS AGREGAR SOLO TEXTO: TEXTCONTENT
// SI QUEREMOS AGREGAR UN CONTENIDO DINAMICO DE HTML
// div.textContent = 'Hello people'; //Solo text
// div.innerHTML = ` <li class="item">List Item1</li>
// <li>List Item2</li>`; // Proper HTML dynamic.

// ::::: Change CSS with STYLE  :::::
// Es mejor usar CLASSLIST que solo STYLE.
// Tenemos el .title CLASS ya estilizada
// const random = document.querySelector('.random');
// random.classList.add('title');
// Asi agregamos los Styles, es mejor tenerlos hechos y mandarlos por CSS.

// ::::::::::::::::::::::::::::::
// :::::  Events Overview   :::::
// ::::::::::::::::::::::::::::::
// Respondemos a Eventos --> Cuando sucede algo respondemos: sea un hover, un click, scroll, etc.

// :::::  Click Events  :::::
// Ya tenemos unos STYLES realizados
// 1) Seleccionamos el ELEMENT (btn, heading, etc)
// 2) addEventListener(what to listen, what to do)
//
// Seleccionamos elementos: BTN y h2
// const btn = document.querySelector('.btn'); //Nos devuelve un Node Object
// const heading = document.querySelector('h2');
//
//CallBack Function ---> VER FUNCTION REFERENCE
//
// function changeColors() {
//   let hasClass = heading.classList.contains('red');
//   if (hasClass) {
//     heading.classList.remove('red');
//   } else {
//     heading.classList.add('red');
//   }
// }

// Agregamos la Function de lo que sucederá!
// btn.addEventListener('click', function () {
//   heading.classList.add('red');
// });
// H2 recibe la CLASS RED
//
// :::::  Function Reference   :::::
//Usaremos esto dentro del mismo ejemplo anterior
// Una vez establecida la Call Back Function:
// btn.addEventListener('click', changeColors);

// ::::  Mouse Events  ::::
// Usamos el mismo HTML que antes
//
// const heading = document.querySelector('h2');
// const button = document.querySelector('.btn');
// button.addEventListener('click', function () {
//   console.log('this is click');
// });
// button.addEventListener('mousedown', function () {
//   console.log('this is mousedown');
// });
// button.addEventListener('mouseup', function () {
//   console.log('this is mouseup');
// });
// //mouseenter : hover
// heading.addEventListener('mouseenter', function () {
//   heading.classList.add('blue');
// });
// //mouseleave: salimos.
// heading.addEventListener('mouseleave', function () {
//   heading.classList.remove('blue');
// });

// ::::  Key Events    ::::
// Creamos un INPUT en HTML
// const nameInput = document.getElementById('name');
// nameInput.addEventListener('keypress', function () {
//   console.log('you typed');
// });
// nameInput.addEventListener('keydown', function () {
//   console.log('keydown'); // Cuando la letra esta siendo apretada
// });
// nameInput.addEventListener('keyup', function () {
//   console.log('you dont typed'); // Release the key
// });

// ::::   Event Objects   ::::
// Everytime we work with events we get these objects.
// E, EVT, etc. ... Nos daran info del evento
//
//

// ::::      ::::
//
//
//

// ::::      ::::
//
//
//

// ::::      ::::
//
//
//
