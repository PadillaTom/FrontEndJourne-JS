// :::::::::: ES6 :::::::::::::
// Bron in 1995, it needs to keep up with time.
// New Versions. In 2015 = ES6.
// There is es7, es8. But ES6 is the LATEST MAJOR UPDATE.
// Here we will see as well es7, and es8.

// --------------------------> VAR, LET, CONST <----------------------------
// Define, Update, Redefine by using VAR !!! ----> NOT GOOD
// CONST cannot mutate primitive types.
//
// LET: Can Define, Update, but NO REDEFINE (its good, cannot change type)
// let number = 100;
// number = 200;
// console.log(number);
// let number = 'orange'; // TIRA ERROR! Already been Declared
// console.log(number);
//
// CONST: No permite mutar valores Primitve. Str, Int, Float, etc...Pero si tenemos REFERENCE TYPES:
// const person = { name: 'john' };
// console.log(person.name);
// person.name = 'Tom';
// console.log(person.name); // Nos PERMITE CAMBIAR!
//          Primitive Types:
// const amount = 200;
// amount = 500;
// console.log(amount); // NO PERMITE, TIRA ERROR
//
// Using Var Let Const in Function Scopes and Block Scopes --->
//  LET and CONST: are Blocked Scope {} : Anythin within {}
//  VAR: Only Function Scoped
//  EJ: --Global Scope--
// var amount = 100; // Siempre tendremos acceso.
//
// function greet() {
// EJ: --Local Scope--
//   var randomVar = 'Some Random Variable';
//   console.log(`Hello --> ${randomVar} ${amount}`); // Vemos que podemos Acceder a ambas Varuables
// }
// greet();
// console.log(randomVar); // NO PODEMOS ACCEDER! Figura "not Defined"
//
// Probamos Var Let Const:
// 1) VAR --> dentro de TEST ---> CAMBIA!!!!
// 2) LET -->
// let total = 100;
// let test = true;
// if (test) {
//   // inside this: Local Scope
//   let total = 'Tu culo'; // Var -> CAMBIA!!! || Let -> NO CAMBIA!! || Const ->
//   console.log('hello there');
// }
// console.log(total);
//

// --------------------------> TEMPLATE STRINGS <----------------------------
// `` --> Podemos pasar cualquier tipo de " " '' y variables.
// Ademas: ${} nos permite acceder a values!
// const name = 'TOM';
// console.log(`my name is : ${name}`);
//

// --------------------------> TEMPLATE STRINGS IN HTML <----------------------------
// Lo mejor de Template Literals es poder usarla para HTML dynamicamente.
// result.innerHTML = `<p class="tu vieja"> ${num1+num2} </p>`
// Otro Ejemplo mas complejo:
// const person = {
//   // Tenemos un Array
//   name: 'Tom',
//   job: 'Tu vieja',
//   hobbies: ['Surfing', 'baking', 'bowling'],
// };
// const result = document.getElementById('result'); // Seleccionamos el Elemento a modificar
// result.innerHTML = `
// <h2>${person.name}<h2>
// <p>${person.job}<p>
// <ul>${person.hobbies
//   .map(function (item) {
//     return `<li>${item}</li>`;
//   })
//   .join('')}</ul>
// `; // MAP separa los elementos con Commas ",". usando JOIN (" ") Reemplazamos las Commas por espacios
//

// --------------------------> TAGGED TEMPLATE LITERALS <----------------------------
// Poder pasar las Template Literals por una Function. Components Libraries are built using Template Literals
// const author = 'Some Author';
// const statement = 'Some Statement';
// const quote = highlight`Here is the ${statement} by ${author}`;
// console.log(quote);
// const result = document.getElementById('result');
// result.innerHTML = quote;
// Digamos que queremos STRONG text, arround Variables --> Usaremos Tag Template Literal
// Creamos una Function que pasaremos en QUOTE.
// Dicha function tendrá dos arguments: "strings" and "acces to variables"
// function highlight(text, ...vars) {
//Veremos en profundidad mas adelante: Acumula todas las VARS
// console.log({ text, vars }); // Imprime dos Array separados: Text (siempre un empty str al final), Vars
// const awesomeText = text.map((item, index) => {
//Mapeamos Text (iterar por cada elemento del Array: TEXT)
//     return `${item}<strong class =blue"> ${vars[index] || ''} </strong>`; // Ver abajo
//   });
//   return awesomeText.join(''); // invokamos la func.join("") sin nada que los separe. Default = ","
// }
// EXPLICACION AWESOMETEXT
// Mapeamos TEXT (dicha array contiene elementos de texto)
// return `<primer item> strong, <primer variable del array [0]> strong.`
// Devuelve TEXTO strong VARIABLE. --> Itera por cada elemento del ARRAY!!!!!
//"Here is the + strong + Statement + by + Author"
//"texto[0] + strong + var[0] + texto[1] + var[1]" ---> SE REPITE
// || " " -----> QUIERE DECIR QUE AL FINAL IMPRIME ESPACIO, en vez del ultimo item del Array Text (que daría UNDEFINED)

// --------------------------> ARROW FUNCTIONS BASICS <----------------------------
// Regular Function : function sayHello () {} --> sayHello();
// Function Expressions : const hello = function (name){log name} --> hello("tom")
//
// With ES6 we have "Fat Arrow Functions" (arrow functions)
// No Name (always as expressions: Assigned to a variable)
// No Function keyword
// They treat THIS differently
//
// Tenemos un BTN en HTML:
// 1) One-Liner: Algo que se ejecuta de toke.
// const sayHello = () => console.log('Hello');
// sayHello();
//
// 2) Parameters: Pasamos un Value asignado a otra variable
// const double = (value) => value * 2;
// const num = double(4);
// console.log(num);
//
// 3) 2 Parameters and more than one line:
// const multiply = (num1, num2) => {
//   const result = num1 * num2;
// More code
//   return result;
// };
// const sum = multiply(5, 5);
// console.log(sum);
//
// 4) Return an Object:
// const object = () => {name:"Tom", age: 25}; // ERROR porque no distingue object de multiline
// Solucion: Ponemos el Object entre parentesis
// const object = () => ({ name: 'Tom', age: 25 }); // Ahora Podemos utilizarlo
// const person = object();
// console.log(person);
//
// 5) As Callback Functions:
// Ejemplo --> Filter numbers bigger than 2.
// const numbers = [1, 2, 3, 4, 5, 6];
// const big = numbers.filter((number) => number > 2); // (number) "arrow: return if" (condition num >2)
// console.log(big); // Devuelve un Array
// Ejemplo 2 --> Multiple values:
// const big2 = numbers.filter((number, index) => {
//   console.log(index); // Devuelve el Index de los elementos del Array
//   return number > 2; // Mayores de 2
// });
// console.log(big2); // Invokamos
//
// 6) As EventListener: Tenemos un BTN que LOG cuando clicked.
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => console.log('You Clicked Me!'));

// Objects and THIS
// This Regular ---> This hace referencia al PARENT una vez asignado dentro de la Function.
// This ARROW ----> Hace referencia al SURROUND de donde fue Assignado.!!!
// Ejemplo: Dos Objects Bob(Regular) and Anna(Arrow)

// const bob = {
//   firstName: 'Bob',
//   lastName: 'Smith',
//   sayName: function () {
//     console.log(this); // Mostramos a donde apunta THIS --> Bob
//     const self = this;
//     setTimeout(function () {
//       //   console.log(this); // Apunta a Window Porque BOB ya fue ejecutado
//       console.log(self); // Apunta a BOB, donde fue asignado SELF
//       console.log(`Hi my name is : ${self.firstName} ${self.lastName}`);
//     }, 2000);
//   },
// };
// const anna = {
//   firstName: 'Anna',
//   lastName: 'Sanders',
//   sayName: () => {
//     console.log(this); // Mostramos a donde apunta THIS --> Window
//     console.log(`Hi my name is : ${this.firstName} ${this.lastName}`);
//   },
// };
// bob.sayName();
// anna.sayName();
//
// AHORA: Usamos TimeOut de 2s para BOB: Ver arriba.
// Invoka Bob - 2s after - Invoka la Timeout ... THIS apunta a window ya que bob fue invokado previamente!
// Solucion: const self = this --> Dentro de BOB
// Solucion 2: Usamos una Arrow Function donde THIS referencia a su SURROUND, no a su assignacion, y permite acceder a BOB.
// Ver Bob2 -->
// const bob2 = {
//   firstName: 'Bob 2',
//   lastName: 'Smith 2',
//   sayName: function () {
//     console.log(this); // Mostramos a donde apunta THIS --> Bob
//     setTimeout(() => {
//       console.log(this); // Apunta al OBJECT bob2, ya que hace referencia al SURROUND, NO PARENT
//       console.log(`Hi my name is : ${this.firstName} ${this.lastName}`);
//     }, 2000);
//   },
// };
// bob2.sayName();
//
// Selecting Elements and THIS:
// Regular Function:
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   console.log(this); // This hace referencia al Button
//   this.style.color = 'blue';
// });
// Arrow Function:
// btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   console.log(this); // This hace referencia al WINDOW
//   this.style.color = 'blue';  // TIRA ERROR!
// });
// HORA: Queremos TimeOut 2s:
// btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   console.log(this); // Button
//   setTimeout(function () {
//     console.log(this);
//     this.style.color = 'blue'; // Luego de 2s, btn ya fue clickeado... This refers to Window!!!
//   }, 2000);
// });
// Solucion: Arrow Functions ;)
// btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   console.log(this); // Button
//   setTimeout(() => {
//     console.log(this); // This apunta a Button ( Surrounds the ARROW!)
//     this.style.color = 'blue'; // This apunta a Button! (ya que es su SURROUNDING!)
//   }, 2000);
// });

// Default Parameters and Arrow Functions "gotchas"
// const john = 'John';
// const peter = 'Peter';
// // Regular
// function sayHi(person = 'Default') {
//   console.log(`Regular says Hi: ${person}`);
// }
// // Arrow
// const sayHello = (person) => console.log(`Arrow says Hi: ${person}`);
// //
// sayHi(); // Undefined --> Una vez agregado el Default imprimirá el Default hasta que algun parametro se pase
// sayHello(peter); // Peter
//
// Que podemos hacer por el undefined? DEFAULT PARAMETERS
// function (person = "Default") --> Pasará default hasta que elijamos un parameter
// Nos permite pasar algo por default en caso de que nadie meta un Parameter
//
// Gotcha --> ARROW Functions no pueden ser invokadas antes de ser declaradas, a diferencia de las Functions Regulares!

// --------------------------> ARRAY DESTRUCTURING <----------------------------
// Faster way to Access or Unpack values form Arrays
// Objects into Variables
// const fruits = ['orange', 'apple', 'pomme', 'banana'];
// const friends = ['John', 'Tom', 'Katy', 'bobby', 'rafa'];
// Regular Way:
// const orange = fruits[0];
// const banana = fruits[3];
// const apple = fruits[1];
// console.log(orange, banana, apple);
// ES6 faster way:
// const [index0, index1, index2] = friends; // Accedemos al Array por index. Pueden llamarse como querramos
// console.log(index0, index1, index2); // Si nos pasamos del Length= Undefined
// Si queremos Saltear algun item?
// const [item1, , item3] = fruits; // Usamos commas para saltear Indexes
// console.log(item1, item3); // Vemos que sealtea sin usar las commas

// --------------------------> SWAP VARIABLES  <----------------------------
// Queremos cambiar first por second y viceversa, como haciamos en Python

// let first = 'bob';
// let second = 'john';
// Manera Regular:
// let temp = second;
// second = first;
// first = temp;
// console.log(first, second);
//
// Manera ES6 (como Python):
// [second, first] = [first, second];
// console.log(first, second);

// -------------------------->  OBJECT DESTRUCTURING  <----------------------------
// const bob = {
//   first: 'Bob',
//   last: 'Sanders',
//   city: 'Olivos',
//   siblings: {
//     sister: 'Jane',
//   },
// };
// Manera Regular:
// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName, lastName, sister);
// ES6 Way:
// const { last, first, city, zip } = bob; // Los Names pasados DEBEN EXISTIR EN EL OBJECT
// console.log(last, first, city, zip); // ZIP undef
// Si queremos pasar otros names para las KEYS : Usamos ALIAS (Key: alias)
// const { first: nombre, last: apellido, city } = bob;
// console.log(nombre, apellido, city); // Usamos ALIAS para invokar.
// Cuando tenemos una property que es a su vez un Object?
// const {
//   first,
//   last,
//   siblings: { sister },
// } = bob;
// console.log(first, last, sister); // Accedemos con el Key dentro del Object as Property

// --------------------------> DESTRUCTURING FUNCTION PARAMETERS  <----------------------------
// const bob = {
//   first: 'Bob',
//   last: 'Sanders',
//   city: 'Olivos',
//   siblings: {
//     sister: 'Jane',
//   },
// };
// Imprimir values dentro de un Object, usando una Function
// function printPerson(person) {
// --> Manera normal:
//   console.log(person.first, person.last);
// --> Otra Manera
//   const { first, last, city } = bob;
//   console.log(first, last, city);
// }
// DESTRUCTURING: SE USA MUCHO EN REACT!!!!!!!!!!!!!!!!!!!!!
// function printPersonDestruct({ first, last, city }) {
//   console.log(first, last, city);
// }
// Invoke
// printPerson(bob);
// printPersonDestruct(bob);

// -------------------------->  NEW STRING METHODS  <----------------------------
// startsWith(), endsWith(), includes(), repeat(),
// const person = 'Peter Smith';
// const employee = '23456-EMP-PETER-SMITH';
// const manager = '23456-MAN-JOHN-DOE';

// console.log(person.startsWith('pet')); // CASE SENSITIVE
// console.log(person.startsWith('Pet'));
// console.log(employee.startsWith('EMP', 6)); // 6: Desde que caracter empezamos
//
// console.log(manager.endsWith('DOE'));
// console.log(manager.endsWith('MAN', 9)); // A la inversa (N = caracter 9) y retrocede.
//
// console.log(employee.includes('SMI'));
//
// Usando Arrow Functions: Una function que imprime varias veces el parametro deseado.
// Default = 3 times si nadie declara mas veces.
// const multiplyPeople = (person, amount = 3) => person.repeat(amount);
// const people = multiplyPeople(person, 10); // Imprimimos person 10 veces
// console.log(people);

// -------------------------->  FOR LOOPS  <----------------------------
// Podemos iterar values de objetos iterables
// const fruits = ['apple', 'pomme', 'banana', 'pera', 'manzana'];
// const longName = 'Sir John Smith the Third of House Padilla';

// Primero : Construir un Short name de uno Long
// let shortName = '';
// for (const letter of longName) {
//   //   console.log(letter); // Vemos que imprime Letra por Letra
//   if (letter === ' ') {
//     // Si Letter es Espacio:
//     continue; // Omitir y Continuar con el flow
//   } else {
//     shortName += letter; // agregar lo que NO SEA espacio a ShortName
//   }
// }
// console.log(shortName); // Eliminamos los espacios
//
// Segundo: Arrays
// for (const fruit of fruits) {
//   if (fruit === 'banana') {
//     // Si fruit es banana
//     // break; // FRENAR EL LOOP y Salir.
//     continue; // OMITIR Y CONTINUAR con el loop
//   }
//   console.log(fruit);
// }

// -------------------------->  SPREAD OPERATORS  <----------------------------
// Allows an iterable to Spread or Expand individually inside the reciever.
// Pocas palabras: Split into single items and copy them.
// Primero: String
// const udemy = 'Udemy';
// const letters = [...udemy];
// console.log(letters); // Array y cada letter es un Item
// Segundo : Arrays y crear una Array flexible a partir de las que tenemos
// const boys = ['John', 'Tom', 'Peter'];
// const girls = ['Susan', 'Katy'];
// const bestFriend = 'Arnold';
//Normal Way:
// const friends = [boys, girls, bestFriend]; // Sumamos todo dentro de una Array
// console.log(friends); // Vemos el problema: Aloja las Array como objectos independientes (Array inside Array)
// Splitting:
// const friends2 = [...boys, ...girls, bestFriend];
// console.log(friends2); // Vemos que todo se aloja en una misma Array, elementos independientes
// Problem? If we re-assign a value inside friends 2, it will change FOREVER!
// const newFriends = friends2;
// newFriends[0] = 'La Katy';
// console.log(newFriends); // NewFriends Tiene La Katy
// console.log(friends2);// A partir de New Friends... Siempre tendremos La Katy
// Solution: USING COPY! instead of Referencing Values
// const newFriends = [...friends2]; // USAR ...
// newFriends[0] = 'La Katy';
// console.log(newFriends); // Usando ... SOLO CAMBIA EN NEWFRIENDS
// console.log(friends2); // Queda igual que antes de La Katy
//
// IN ES8(2018) WE CAN USE THIS IN AN OBJECT!
// const person = { name: 'Tom', job: 'Dev' };
// const newPerson = { ...person, city: 'Chicago', name: 'Peter' }; // Agregamos new Key:Value, Modificamos Key:Value
// console.log(newPerson); // Solo la NEW tiene la City, y Solo cambio el Name en NEW
// console.log(person); // Person quedó inmutable
//
// SPREAD IN DOM ELEMENTS!
// Ejemplo: SelectALL nos devuelve una NODE LIST, no podemos usar Array Methods (map, por ejemplo)ya que es una Node List , no un Array
// HTML: unos H1 || Queremos convertirlos todos en H2 (H2 creado previamente con un ID: Result)
// const headings = document.querySelectorAll('h1');
// const result = document.querySelector('#result');
// ---> ERROR: Vemos que no podemos usar MAP (en un NODE LIST)
// console.log(headings.map((item) => console.log(item)));
// --->CORRECT WAY: "[...]"
// const text = [...headings]
// console.log(text); // Vemos todos los H1 como array
//   .map((item) => `<span>${item.textContent}</span>`) // MAP item, Para cada uno meteremos su Contenido dentro de una Span
//   .join(''); // Y no queremos usar "," para separarlos (que sería su default). Usamos Espacio en Blanko
// Ponemos esto en HTML
// result.innerHTML = text; // vemos en el HTML que en el H2 metimos toda la lista generada
//
// FUNCTION ARGUMENTS!
// Cuando tenemos una Funct que busca Individual Items, podemos Separar una Array en individual Items y poder correr la Function
// Ejemplo:
// console.log(Math.max(4, 5, 6, 7, 88));
// Pero si tenemos dichos numbers en Array?
// const numbers = [23, 45, 66, 88, 2000];
// console.log(Math.max(numbers)); // NAN --> Not a Number
// Solucion:
// console.log(Math.max(...numbers)); // Spreads the Array into individual Numbers
//
// const john = ['John', 'Sanders'];
// const sayHello = (name, lastName) => {
//   console.log(`Hello ${name} ${lastName}`);
// };
// Manera Normal:
// sayHello(john[0], john[1]);
// Manera Optima:
// sayHello(...john);

// -------------------------->  REST OPERATOR  <----------------------------
// Hace lo oposite que SPREAD, Gathers values. NO SE PUEDE REPETIR LA PALABRA REST!
// ---> Destructuring
// Array:
// const fruit = ['Appel', 'pomme', 'Orange'];
// const [index1, ...rest] = fruit; // Separa el Primer INdex, el resto se mantiene dentro de un Array
// console.log(index1, rest);
// // Object:
// const person = { name: 'Tom', last: 'Smith', job: 'Dev' };
// const { job, ...rest2 } = person; // Separa el Primer Key seleccionado del REST
// console.log(job, rest2);
//
// Electing Parameter where we are Passing a Function
// REST ---> PARAMETER ///// SPREAD ---> ARGUMENT
// Usando REST voy a juntar todos los parametros con ...y los puedo trabajar
// const getAverage = (name, ...scores) => {
// PASADA COMO PARAMETER
//   console.log(name);
//   console.log(scores);
//   let total = 0;
//   for (const score of scores) {
//     // For Score inside Scores (passed as parameter)
//     total += score; // Total is Total plus each score.
//   }
//   console.log(`${name} Average: ${total / scores.length}`); // Total / number of Scores
// };
// getAverage(person.name, 10, 20, 0); // 30 total, 3 elementos = 10 average
// Usando Spread:
// const spreadScores = [10, 10, 10, 10, 10, 10];
// getAverage(person.name, ...spreadScores); // PASADA COMO ARGUMENT

// -------------------------->  ARRAY. FROM and OF  <----------------------------
// Creates a new Array instance from a viarble number of Arguments
// ----> OF:
// const friends = Array.of('John', 2, true); // Creamos el Array DE dichos valores
// console.log(friends);
//
// ----> FROM: Returns an Array Object from any object with Length or Iterable
// const udemy = 'Udemy'; // String
// console.log(Array.from(udemy)); // Armamos una Array de las Letras de Udemy
// Arguments are Objects too -->
// function countTotal() {
//   console.log(arguments); // Vemos que los Arguments pasados son un Object, parecido a Array. Crearemos un Array de dichos arguments
//   console.log(Array.from(arguments)); // Vemos que es de type ARRAY!
// Ya que es un Array podemos usar Methods:
//   let total = Array.from(arguments).reduce((total, curr) => (total += curr), 0); // Reduce: itera uo por uno, alojando sus valores en Total y sumando el Current. EMPEZANDO DE CERO
//   console.log(total);
// }
// countTotal(100, 20, 50, 40);
//
// Usando el DOM:
// Tenemos un HTML con h1, 3xp, h2#result, h1#second
// Seleccionamos
// const p = document.querySelectorAll('p');
// const result = document.querySelector('#result');
// const second = document.querySelector('#second');

// console.log(p); // Vemos la NODE LIST
// let newText = Array.from(p); // Transformamos la Node List en ARRAY!
// console.log(newText); // Vemos el ARRAY

// Long Way de agregar al DOM
// newText = newText.map((item) => `<span>${item.textContent}</span>`).join(''); // Actualizamos la NewText, iterando los items y metiendo su contenido dentro de un span
// result.innerHTML = newText; // La agregamos a RESULT
// Shorter Way! --> Directo de la seleccion, sin alojar en Variable, creamos la Arrow Funct que itere sobre cada Item
// const text = Array.from(document.querySelectorAll('p'), (item) => {
//   console.log(item); // vemos cada item de la seleccion
//   return `<span>${item.textContent}</span>`;
// }).join('');
// second.innerHTML = text; // Vemos el h1

// -------------------------->  FIND, FINDINDEX, EVERY, SOME <----------------------------
// Find: Specific Item || FindIndex: Index of Item || Every: every item in Array
// Some: At least one item
const people = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Katy' },
  { id: 3, name: 'Rafa' },
];
const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

// Lo que vimos Previamente: Se crea un Array RAFA, que contiene un filtro de PEOPLE, buscando cualquiera que name = Rafa
// const rafa = people.filter((person) => person.name === 'Rafa');
// console.log(rafa); // Vemos si hay Matches, serán alojados en un ARRAY RAFA
// console.log(rafa[0].name); // Para poder ver las Keys del object (PEOPLE) deberemos ingresar por INDEX (ya que es un array)
// console.log(rafa[0].id);
//
// ---> FIND: NO DEVUELVE ARRAY, SINO el Item (object) Dentro del ARRAY.
// const Rafa = people.find((person) => person.name === 'Rafa');
// console.log(Rafa); // Vemos el OBJECT con ID y Name
// Si no hay Match = Undefined
//
// ---> FINDINDEX: Ejemplo: Remover el item de ID 3.
// const toDelete = people.findIndex((item) => item.id === 3);
// console.log(toDelete); // Vemos el INDEX para la persona de ID 3
// Usaremos Slice Method
// const newWithDeleted = people.slice(0, toDelete); // SLICE (de, Dejar FUera)
// console.log(newWithDeleted); // Vemos el Nuevo Array con item deleteado
//
// ---> EVERY:
// const allGoodGrades = grades.every((grade) => grade !== 'C'); // If grade NOT C all are good grades
// console.log(allGoodGrades); // FALSE --> NO TODAS SON GOOD GRADES, HAY ALGUNA C
// Pasamos la misma funcion pero en las GOOD GRADES:
// const allGoodGrades2 = goodGrades.every((grade) => grade !== 'C');
// console.log(allGoodGrades2); // TRUE --> ninguna C
//
// ---> SOME:
// const oneBadGrade = grades.some((grade) => grade === 'C');
// console.log(oneBadGrade); //TRUE: Alguna dentro de GRADES es C
