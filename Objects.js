// After DOM PROJECTS
//
// OBJECTS:
// Key : Value --> Pairs
// Method: If a Value is a FUNCTION its then called METHOD
// Usando "." Podemos acceder a las properties
const person = {
  name: 'tom',
  age: 25,
  //Method long way:
  greet: function (name) {
    console.log(`hello i am ${name}`);
  },
  //Method Shortcut: Without KEY
  sayHi(name) {
    console.log(`hello i am ${name}`);
  },
};

console.log(person);
console.log(person.name); // Usamos "."
//
const name1 = person.name;
console.log(name1); // Alojamos la property en una variable
//
//Change Values
person.age = 60;
console.log(person); // Mostramos todo el object con el new age
//
// Add Properties:
person.city = 'chicago';
console.log(person);
//
//Delete Property:
delete person.age;
console.log(person);
