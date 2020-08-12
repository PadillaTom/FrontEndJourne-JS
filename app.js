//  ::::::::::::::

//  :::::::::::::: Helper Methods
// document.write("Hello World");
// alert("Hello People");
// console.log("Hello Guys");

//  :::::::::::::: Statements and Comments
// console.log('hello wolrd');
// console.log('hello people');
// console.log('hello wolrd');
// console.log('hello wolrd');

//  :::::::::::::: Variables
// let name = 'Tom';
// console.log('Hello', name);
//
// let address, zip, state;
// address = 'France';
// zip = '74160';
// state = 'Collonges';
// console.log(
//   'Hello, my name is',
//   name,
//   'and I live in',
//   address,
//   'with the zip:',
//   zip,
//   'in',
//   state,
//   '.'
// );

//  :::::::::::::: Const, Let, Var
// Var was replaced by Let and Const. NO SE USA MAS!!!!
// Const --> Cannot be reasigned, cannot be empty, cannot change values or it gives an error.
// Let --> Recomendable usarlo para todo.
// Var --> Solo se usa en E6.
// La mayoria de programadores usa Const y luego modifica valores. Muy pocas veces usan Let.

//  :::::::::::::: Quotation Marks "" or ''
// There is NO DIFFERENCE
// To have them as a string we need to escape them by adding a \ before them
// const name ="John\'s has a blue car"

//  :::::::::::::: String Concatenation
// Combining Strings Values
//
// const name = 'john';
// const lastName = 'padilla';
// let fullname = name + ' ' + lastName;
// console.log('Hello i am ' + name + ' .');
// console.log(' i am ' + fullname);
//
// const website = 'google';
// const url = 'www.' + website + '.com';
// console.log(url);

//  :::::::::::::: Numbers
// "Loosely Typed" = we don't have to specify which value we add
// Strings are BLACK, numbers are BLUE
// const number1 = 100;
// let pants = 2.456;
// pants = 'are great';
// console.log(number1);
// console.log(pants);
// const number2 = 25;
// console.log(number2);
// If we see a BLACK NUMBER!!! pay attention it is a STRING!!
// const add = number1 + number2;
// const mult = number1 * number2;
// const resta = number1 - number2;
// const div = number1 / number2;
// console.log(add);
// console.log(mult);
// console.log(resta);
// console.log(div);

//  :::::::::::::: Operators
// +=, -=, *=, /=, ++, --, %
// let number = 50;
// number += 5;  -----> Suma 5
// number += 5;
// number += 5;
// console.log(number);
// number++;     -----> Suma 1
// number++;
// console.log(number);
//
// Modulus %  --> SOBRANTE // REMAINDER
// Cuanto es lo que SOBRA de una division
// const pizzaSlices = 10;
// const children = 3;
// const sobran = pizzaSlices % children;
// console.log(sobran);

//  :::::::::::::: Implicit Type Conversion
// let number3 = '10';
// let number4 = '20';
// const result = number3 + number4;
// console.log(result);
// This just Concatenate the Strings
// const result2 = number3 - number4;
// console.log(result2);
// JS knows i am treating these as numbers , it converrts the STR to INTEGER.
// STR + INT = CONCAT

//  :::::::::::::: Data Types
// Primitives --> Str, Nums, Bool, Null, Undef, Symbol
// Objects --> Arrays, Functions, Objects (dictionaries)
// Typeof --> Shows which type is it.
//
// // STRING:
// let text = 'some text';
// console.log(typeof text);
// // NUMBER:
// let nums = 25;
// console.log(typeof nums);
// // BOOLEAN:
// let boolType = true;
// console.log(typeof boolType);
// // NULL: Returns Object but its NULL
// const nullType = null;
// console.log(typeof nullType);
// // UNDEFINED: Not defined in variables
// let undefType;
// console.log(undefType);

//  :::::::::::::: Arrays
// Lists in Python --> [] index 0 base
// const friendsList = ['anna', 'tom', 'mati', 'pibe'];
// console.log(friendsList);
// const mynumberArray = [1, 5, 6, 2, 3];
// console.log(mynumberArray);
// // console.log(friendsList[1]); --> Index 1
// let bestFriend = friendsList[3];
// console.log(bestFriend);
// friendsList[4] = 'Pibito'; --> Reasign value
// console.log(friendsList[4]);
// DevOps me los muestra separados por Index

//  :::::::::::::: Functions
// Write a code and re use that code piece.
// function hello(name) {
//   console.log('Hello there ' + name);
// }
// hello('Tom');
// hello('Padi');

//  :::::::::::::: Funct: Parameters and Arguments
// Parameter --> When is  declared, defined: function hello (PARAMETER) {}
// Argument --> When we invoke, call it: hello(ARGUMENT);

//  :::::::::::::: Funct: Return
// Ejemplo: 1 Inch = 2.54 cm
// function calculate(value) {
//   let newValue = value * 2.54;
//   console.log('Value in CM is : ' + (value * 2.54 + ' cm.'));
//   return newValue;
// }
// let wallHeight = 50;
// const width = calculate(100);
// const height = calculate(wallHeight);
//
// const dimensions = [width, height];
// console.log(dimensions);
// --> Nos tira undefined  porque no declaramos un RETURN en la function. Solo un Console.log()
//  Declaramos un RETURN: return "hello world"
//  Declaramos una newValue dentro la function
// Shortcut:
// function calculate2(value) {
//   return value * 2.54;  --> Shortcut Headers, PERO NO GUARDA EL VALUE GENERADO
// }
// const width = calculate2(100);
// const height = calculate2(wallHeight);
// const dimensions = [width, height];
// console.log(dimensions);

//  :::::::::::::: Funct: Expressions
// Is creating a variable then assigning the Function to that Variable.
// NORMAL:
// function addValues(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// const firstSum = addValues(5, 10);
// // console.log(firstSum);
// const secondSum = addValues(1, 4);
// // console.log(secondSum);
// //
// // With EXPRESSIONS:
// const addFunc = function (num1, num2) {
//   return num1 + num2;
// };
// const thirdSum = addFunc(5, 20);
// // console.log(thirdSum);
// //
// const allSums = [firstSum, secondSum, thirdSum, addFunc(10, 10)];
// console.log(allSums);
//
// ARROW FUNCTIONS: Const multiply = (num1, num2) => num1*num2;

//  :::::::::::::: Objects
// KEYS : VALUES  ---> Dictionary in Python.
// const person = {
//   name: 'Tom',
//   lastName: 'Padilla',
//   age: 30,
//   education: false,
//   married: true,
//   siblings: ['anna', 'padi', 'rafa'],
//   greetings: function () {
//     console.log('Hello i am Tom');
//   },
//   //   Shortcut para functions since ES6
//   greetings2() {
//     console.log('my name is ES6');
//   },
// };
// console.log(person);
// // console.log(person.name); --> Buscamos el item
// person.greetings(); --> Ejecutamos la function
// person.greetings2(); --> Shortcut since ES6
// console.log(person.siblings[2]); --> Buscamos dentro del array

//  :::::::::::::: Conditional Statements
// If the condition is met , se mete al loop, if not, continua.
// TRUE or FALSE
// value = 2 > 1;
// console.log(typeof value);
// if (value) {
//   //--> Condition
//   console.log('hellor world');
//   //---> What happens
// }
// if (false) {
//   console.log('hello TRUE');
// } else {
//   console.log('Hello FALSE');
// }

//  :::::::::::::: Equality
// Podemos verificar con =
// let num1 = 6;
// let num2 = 6;
// const result = num1 >= num2;
// if (num1 > num2) {
//   console.log('First wins');
// } else if (result) {
//   console.log('Empate');
// } else {
//   console.log('Second Wins');
// }
//
// NOT TRUE -->  ! BEFORE --> Shows the opposite
// let value = true;
// if (!value) {
//   console.log('is true');
// } else {
//   console.log('NOT true');
// }
//
// == and ===
// let num1 = 6;
// let num2 = '6';
// console.log(num1 == num2);   //--> True
// console.log(num1 === num2);  // --> False

//  :::::::::::::: Logial Operators
// || OR   --> IF ONE IS TRUE: bool = TRUE
// && AND  --> BOTH NEED TO BE TRUE: bool =TRUE
// let name = 'Tom';
// let age = 24;
// if (name === 'bob' && age === 24) {
//   console.log('Hello BOB');
// } else {
//   console.log('wrong values');
// }

//  :::::::::::::: Switch Statement
// Another way to write IF ---> Muy usado en REDUX
let dice = 4;

// Long way... idem for 1 to 6
// if (dice === 1) {
//   console.log('It is One');
// } else if (dice === 2) {
//   console.log('It is Two');
// }

// Switch way:    ---> Se usa mucho en Redux
// switch (dice) {
//   case 1:
//     console.log('One');
//     break;
//   case 2:
//     console.log('Two');
//     break;
//   case 3:
//     console.log('Three');
//     break;
//   case 4:
//     console.log('Four');
//     break;
//   case 5:
//     console.log('Five');
//     break;
//   case 6:
//     console.log('Six');
//     break;
//   default:
//     console.log('You did not roll the dice');
// }

//  :::::::::::::: Loops: WHILE
// Ej: Si tengo dinero ( > 0) i am going to the mall
// let amount = 10;
// while (amount > 0) {
//   console.log('I have ' + amount + " Let's buy something");
//   amount--;
// }
// while (amount === 0) {
//   console.log('Im POOR!');
//   break;
// }
// SIN AMOUNT-- : NOS METEMOS EN UN LOOP INFINITO!
// Podemos usar BREAK para forzar el stop!

//  :::::::::::::: Loops: DO WHILE
// let money = 15;
// do {
//   console.log('you have ' + money + ' Dollras');
//   money++;
// } while (money < 10);
// El WHILE CORRE UNA VEZ SI O SI, impriminedo la expression de DO.

//  :::::::::::::: Loops: FOR
// Variable a modificar
// For (Starting value, When to stop, Augment value)
let i;
for (i = 0; i < 10; i++) {
  console.log('number is ' + i);
}

for (let number = 10; number >= 0; number--) {
  console.log('Numbers:' + number);
}
