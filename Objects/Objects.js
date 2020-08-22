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
const john = {
  firstName: 'John',
  lastName: 'Anderson',
  fullName: function () {
    console.log(this); // Vemos a que refiere el THIS
    console.log(`My name is ${this.firstName} ${this.lastName}`); // THIS REFIERE AL OBJECT
  },
};
const bob = {
  firstName: 'Bob',
  lastName: 'Sanders',
  fullName: function () {
    console.log(this); // Vemos a que refiere el THIS
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};
john.fullName();
bob.fullName();
// Repetimos un METHOD HARD CODED, sería mejor hacerlo Dynamic!
// THIS ---> REFIERE AL OBJECT
//  fullName: function () {
// console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
