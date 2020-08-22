// After DOM PROJECTS
//
// OBJECTS:
// Key : Value --> Pairs
// Method: If a Value is a FUNCTION its then called METHOD
// Usando "." Podemos acceder a las properties
const age = 70;
let random = 'random-value';
random = 'age';

const person = {
  name: 'tom',
  age: age,
  //Method long way:
  greet: function (name) {
    console.log(`hello i am ${name}`);
  },
  //Method Shortcut: Without KEY
  sayHi(name) {
    console.log(`hello i am ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'Coding',
      address: '123 fake street',
    },
  },
  'random-value': 'random',
};

// console.log(person);
// console.log(person.name); // Usamos "."
//
// const name1 = person.name;
// console.log(name1); // Alojamos la property en una variable
//
//Change Values
// person.age = 60;
// console.log(person); // Mostramos todo el object con el new age
//
// Add Properties:
// person.city = 'chicago';
// console.log(person);
//
//Delete Property:
// delete person.age;
// console.log(person);
//
// NESTED OBJECTS:
// Para ingresar usamos "." --> person.job.company.name
// console.log(person.job.company.name);
// job: {
//   title: 'developer',
//     company: {
//     name: 'Coding',
//       address: '123 fake street',
//     },
// },
//
// KEY NAMING:
// console.log(person['random-value']);
// I can store KEYS in variables:
// let random = 'random-value'; // Pegamos arriba
// console.log(person[random]); // Usando la variable accedemos a la KEY "random-value"
// Otra manera:
// const age = 70; // Lo pegamos arriba
// random = 'age'; // Pegamos Arriba
// console.log(person[random]);
// ESTO NOS PERMITE CAMBIAR VALORES.
// If STR is AGE, we must have a KEY AGE.
//
// We will use this to acces Dynamically objects in REACT!
//
//
// :::::: THIS KEYWORD :::::
// Points to the Left of the DOT.
//
// EJ: Hard CODING --> Creamos un Object, con dentro una Key con un Method como value.
// const john = {
//   firstName: 'John',
//   lastName: 'Anderson',
//   fullName: function () {
//     console.log(this); // Vemos a que refiere el THIS
//     console.log(`My name is ${this.firstName} ${this.lastName}`); // THIS REFIERE AL OBJECT
//   },
// };
// const bob = {
//   firstName: 'Bob',
//   lastName: 'Sanders',
//   fullName: function () {
//     console.log(this); // Vemos a que refiere el THIS
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
// };
// john.fullName();
// bob.fullName();
// Repetimos un METHOD HARD CODED, sería mejor hacerlo Dynamic!
// THIS ---> REFIERE AL OBJECT
//  fullName: function () {
// console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
//
//THIS ADVANCED:
// In regular Functions (NOT ARROW) : THIS --> Al object (LEFT TO THE DOT)
// SI NO HAY OBJECT: Al parent global: WINDOW
// console.log(this); // Vemos la WINDOW

// function showThis() {
//   console.log(this);
// }
// const john = {
//   name: 'John',
//   showThis: showThis,
// };
// const bob = {
//   name: 'Bob',
//   showThis: showThis,
// };
// john.showThis(); // Vemos que cada THIS pertenece a su OBJECT
// bob.showThis();
// showThis(); // Me muestra la window, porque en la FUNCT el THIS apunta al WINDOW
//
//Ejemplo con 2 btns
// const btn1 = document.querySelector('.btn-1');
// const btn2 = document.querySelector('.btn-2');

// btn1.addEventListener('click', showThis); // Cada uno a su OBJECTO
// btn2.addEventListener('click', showThis);
// PERO si invocamos la FUNC dentro del BTN, logicamente
// nos mostrará la WINDOW
// btn2.addEventListener('click', function () {
//   showThis();
// });
//
// ::::: FACTORY FUNCTIONS :::::
// Volvemos al ejemplo John y Bob (Donde "this" era dynamic) NO lo era del todo.
// Necesitabamos escribir el console.log para cada item.
// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName} ${this.lastName} and i love JS`
//       );
//     },
//   };
// }
// const john = createPerson('John', 'Anderson');
// john.fullName();
// const susy = createPerson('Susy', 'Huehue');
// susy.fullName();
// Simplemente cambiamos el LOG una sola vez e ingresamos los Arguments para LOG los names
//
// ::::: CONSTRUCTOR FUNCTIONS :::::
// Haremos lo mismo que antes
// Usamos CAPITAL Letter para demostrar que es especial

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and i love React`
//     );
//   };
//   console.log(this);
// VEMOS QUE THIS EN ESTE CASO NOS LLEVA A UN OBJECT.
//CREADO POR LA FUNCTION junto con los parametros dados
// }

// const john = new Person('John', 'Anderson'); // Se usa NEW para crear el Object
// john.fullName();
// const bob = new Person('Bob', 'Anderson');
// bob.fullName();
// Property --> ALL JS objects have access to this property that returns the constructor function that created it.
// This is BuiltIN. Arrays and Functions are OBJECTS in JS
// console.log(john.constructor); // Aqui se ve la Function completa
//
// const tom = {};
// console.log(tom.constructor); // Vemos la Function del object vacio (creada por JS para darle vida)
//
// const tomlist = [];
// console.log(tomlist.constructor); // Vemos la Function del Array vacio (creada por JS para darle vida)
//
// const sayhi = function () {};
// console.log(sayhi.constructor); // Idem para las Functions
//
// Probamos usar los constructors para crear una NEW INSTANCE:
// const pibe = new john.constructor('pibe', 'guacho');
// pibe.fullName();
// Usamos la funcion completa, generada para JOHN por JS. Tenemos el acceso a su informacion a partir
// de NEW PERSON
//
//
// ::::: PROTOTYPAL INHERITANCE MODEL :::::
// We are going to store some properties and methods on a proptotype, instead of creating a copy for each new instance.

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // (this.deposit = function (amount) {
  //   this.balance += amount;
  //   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  // });
}

const tom = new Account('tom', 500);
// tom.deposit(500);
// Todo funciona de maravilla, pero....SI tenemos 30k clientes...
// Esto llevará a errores. Para esto usamos PROTOTYPE Property --> Returns Object
// console.log(Account.prototype); // vemos que es una FUNCTION
// Supongamos queremos agregar el BANK Name, no hace falta meterlo en la func inicial... ya que siempre será el mismo
Account.prototype.bank = 'Padis Bank';
console.log(tom); // Vemos que crea un PROTO Object que contiene el BANK
console.log(tom.bank); // Ingresamos al PROTO
//
//CONCLUSION: Es mejor SET un method dentro de un PROTO si es que se repetirá por todo el code.
// Agregamos la DEPOSIT dentro de un PROTO, ya que se usará para cada cliente
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

//Probamos con distintos clientes
const padi = new Account('Padi', 0);
const katy = new Account('Katy', 1000);
tom.deposit(1000);
padi.deposit(500);
katy.deposit(2000);
//
// PROPERTY LOOKUP:
// If the instance (ACCOUNT) hast this.bank = "Katys Bank"
// --> TENDRA JERARQUIA sobre PROTOTYPE (Padis Bank)
//
// EVERYTHIN IN JS IS AN OBJECT:
//Array: Cada vez que creamos un Array, tenemos access al PROTO, quien contiene todas las properties o methods
console.log([]);
//
// Object: Idem Array. Tenemos acceso al PROTO y de ahí a las parameters y methods.
console.log({});
//
// Instance: Dentro de nuesto ACCOUNT tenemos un PROTO, que nos lleva al Object Constructor.
console.log(katy);
//
// CONCLUSION: TODO LLEVA AL OBJECT CONSTRUCTOR, QUIEN NOS PERMITIRA ACCEDER A SUS PROPERTIES AND METHODS
//
// :::::: ES6 SYNTAX ::::::
