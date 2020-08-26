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
// -------------------------->   <----------------------------
//
//
//
//
