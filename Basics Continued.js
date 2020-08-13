//  :::::::::::::: String Properties and Methods
//
// Don't learn all methods. Search them in Google
// let text = 'Tomas Padilla';
// -----> LENGTH <-----
// Cantidad de Caracteres.
// let resultLength = text.length;
// console.log(resultLength);
//-----> LOWER and UPPER case. <-----
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// -----> CHARAT <-----
// console.log(text.charAt(4));
// console.log(text.charAt(12));
// console.log(text.charAt(text.length - 1));
// -----> INDEXOF <-----
//If i don't have it in my string: -1;
// If there are lots: Returns the first one.
// console.log(text.indexOf('a'));
// -----> TRIM <-----
//Si tengo un espacio al principio, lo acorta hasta la primer letra.
// console.log(text);
// console.log(text.trim());
// Ej: tenemos " Tomas Padilla" --> Con espacio antes
// let text2 = ' Tomas Padilla';
// console.log(text2.startsWith('Tomas'));
// Nos tira FALSE : PORQUE NO PUSIMOS EL ESPACIO ANTES DE TOMAS
// Solucion:
// console.log(text.trim().toLocaleLowerCase().startsWith('tomas'));
// TRUE!!!!!!!!!
// -----> INCLUDES <-----
// Por supuesto podemos aplicar la misma solucion que antes
// console.log(text.includes('oma'));
// -----> SLICE <-----
// From , To:
// console.log(text2.slice(1, 4)); // From 1, to 4.
// console.log(text2.slice(-7)); //From last -7.

//  :::::::::::::: Template Literals
//
// We use BACKTICK Characters
// Perform Operations: ${}
// No need to escape
// USADO EN EL DOM PARA INSERTAR ELEMENTOS
// let name = 'tom';
// const string = `hello i'm *\ asd ${name} ${5 * 5} `;
// console.log(string);

//  :::::::::::::: Arrays Prop and Methods
//
// let namesList = ['tom', 'katy', 'july'];
// // -----> LENGTH <-----
// console.log(namesList.length);
// console.log(namesList[namesList.length - 1]);
// console.log(namesList[1]);
// //  -----> CONTACT<-----
// let lastList = ['pepe', 'padi', 'torres'];
// const allNames = namesList.concat(lastList);
// console.log(allNames);
// //-----> REVERSE <-----
// console.log(allNames.reverse());
// // -----> SHIFT / UNSHIFT <-----
// // Unshift :Agrega al comienzo de la lista.
// allNames.unshift('katy2');
// allNames.unshift('padi2');
// console.log(allNames);
// //Shift: Remueve el priemro de la lista
// allNames.shift();
// allNames.shift();
// console.log(allNames);
// // -----> PUSH / POP <-----
// // Pop: Remueve el final
// allNames.pop();
// console.log(allNames);
// // Push: Agrega al final de la lista
// allNames.push('tom2');
// console.log(allNames);
// // -----> SPLICE <-----
// // MODIFICA REALMENTE LA ARRAY!!!! (mutate)
// // splice (index de comienzo, Cuantos remueve)
// let specificNames = allNames.splice(-1, 1); // A partir del ultimo index, tomar 1 solo item.
// console.log(specificNames);
// console.log(allNames);

//  :::::::::::::: Value vs References
//
//  -----> Primite data type value = str, int, etc
//  When changing REFERENCE VALUE, se cambia para todos ( el caso del dictionario)
//  -----> Reference : Usado por objectos (dictionary)
// const number = 1;
// let number2 = number;
// number2 = 7;
// console.log(`first value is ${number}`);
// console.log(`first value is ${number2}`);
//
// un cambio de reference se aplica a todos
// let person = { name: 'bob' };
// // let person2 = person;
// // person2.name = 'susy'; // aqui el cambio del value de NAME.
// console.log(`the name of person is ${person.name}`);
// // console.log(`the name of person is ${person2.name}`);
// // SOLUCION: "just get me the copy of person":
// let person2 = { ...person };
// person2.name = 'susy';
// console.log(`the name of person is ${person2.name}`);

//  :::::::::::::: Null vs Undefined
//
// -----> NULL :  Set by the developer
// -----> UNDEFINED : JS says i cannot find a value
// let number = 20 + null; // 20 + 0
// console.log(number);
// let number2 = 20 + undefined;
// console.log(number2); // Not a number (NaN)

//  :::::::::::::: Truthy and Falsy
//
// ----->  FALSE <------
// " ", Nan, false, null, undefined.
// const text = 'Tom';
// const text2 = '';
// if (text) {    // String = True
//   console.log('value is Truthy');
// } else {
//   console.log('value is Falsy');
// }
// if (text2) { // Empty = False
//   console.log('value is Truthy');
// } else {
//   console.log('value is Falsy');
// }

//  :::::::::::::: Ternary Operator
// -----> Unary <-----
// let text = 'Some Text';
// console.log(typeof text); // Operand
// -----> Binary <------
// let number = 3;
// let number2 = 2 + 5;
// console.log(typeof number, typeof number2); // Operator, Assignment
//-----> Ternary<------
// Condition ? (runs if true) : (runs if false)
// Normally :
// const value = 2 < 1;
// if (value) {
//   console.log('true');
// } else {
//   console.log('false');
// }
//  -----> Ternary way :
// value ? console.log('True') : console.log('False');

//  :::::::::::::: Global and Local Scope
// -----> Global: Any var outside the code block {}
// Digamos que tenemos 15 names... se complica poner nombre a tantas variables name1,2,3....
// let name = 'Bobo';
// name = 'Peter';
// function calculate() {
//   //some code
//   console.log(name);
//   name = 'orange';
// }
// calculate();
// if (true) {
//   console.log(name);
//   name = 'pants';
// }
// console.log(`My name is ${name}`);
// !!!!!!!!!! PROBLEMATICA:
// PISAMOS LOS NAMES, IMPRIME TODO MEZCLADO.
//ATENCION A PEQUEÑOS ERRORES DE TYPEO. !!!!!!!!!
// -----> Local: Inside the block {}, CANNOT ACCES OUTSIDE
// NO APLICABLE A VAR (usar LET)
// function calculate() {
//   const name = 'john';
//   console.log(name);
//   const age = 50;
//   becomesGlobal = 'No Const, Let = Becomes Global, when function is invoked';
// }
// calculate();
// console.log(becomesGlobal);
// console.log(name);
// console.log(age); // NOT DEFINED: porque fue creada locally

//  :::::::::::::: Variable Lookup
// Pasos que hace JS: 1) Busca local dentro para fuera, 2) Busca Global
// const globalNumber = 5;
// function add(num1, num2) {
//   const globalNumber = 15; // Toma primero la Local
//   const result = num1 + num2 + globalNumber;
//   function multiply() {
//     const multiplyResult = result * globalNumber;
//     console.log(multiplyResult); //20 * 15 (local in function1)
//   }
//   multiply();
//   return result;
// }
// console.log(add(2, 3));

//  :::::::::::::: Callback Functions, Higher Order Functions
// Functions are First Class Objects - We can Store them in Variables, We can pass them as an argument of another functions, we can Return from the function (closure);
// -----> CALLBACK <-----
// Function beings passed to another function as an Argument
// Ej: Saludamos al invocador  mañana, tarde, noche...
// function greetMorning(name) {
//   const myName = 'John';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// greetMorning('Tom');
// Deberiamos copy paste 3 veces, repetir mucho. Ademas modificar codigo para hacerlo compatible!

// -----> HIGHER ORDER <-----
//If the Functions accepts another Function as an ARGUMENT
//or RETURNS another Function
// Ej: Hacemos el Saludo de manera mas ordenada y facil:
// function morning(nameCallBack) {
//   return `Good morning ${nameCallBack.toUpperCase()}`;
// }
// function lunch(nameCallBack) {
//   return `Good Lunch ${nameCallBack.repeat(2)}`;
// }
// function dinner(nameCallBack) {
//   return `Good Dinner ${nameCallBack}`;
// }
// function universalGreet(nameHigher, cb) {
//   // CB = Callback, funcion que invokaremos dentro de esta.
//   const myName = 'John';
//   console.log(`${cb(nameHigher)}, my name is ${myName}`);
// }
// universalGreet('Tom', morning); // NameHigher , Function (mroning)
// universalGreet('Katy', lunch);
// universalGreet('July', dinner);
// Que hicimos? Una funcion de llamado (higher), pasamos dentro la CallBack con ciertos methods.
// La gracia: Invocar la func dentro de otra.

//  :::::::::::::: Array Methods !!!!!!!!!!!
// Iteran automaticamente, no need for loops
// Aceptan CallBack functions y se aplican para cada item, tambien podemos referenciar el item que querramos.
// -----> forEach, map, filter, find, reduce. <-----

//  ***** ARRAY GENERAL PARA TRABAJAR *****
const people = [
  { name: 'Bob', age: 20, job: 'Developer' },
  { name: 'Peter', age: 25, job: 'Designer' },
  { name: 'Tom', age: 31, job: 'Front-End' },
];

//  -----> FOR EACH <-----
// Does NOT return a new Array!
// Nos pide una Call Back Function, puede ser creada como parametro o fuera.

//Fuera:  Imprime cada dato de individual
// function showPerson(individual) {
//   //podemos pedir las key ".age , .job"
//   console.log(
//     `${individual.name} has ${individual.age} and he is a ${individual.job}`;
//   );
// }
// people.forEach(showPerson);

// Inside:
// people.forEach(function (indiv) {
//   console.log(`${indiv.name} has ${indiv.age} and he is a ${indiv.job}`);
// });
// Luego usaremos ARROW FUNCTIONS!!!!

// -----> MAP <-----
// Returns a NEW ARRAY. Used a lot!
// Does NOT change size of original array, uses values to make a new oen
// const ages = people.map(function (singleAge) {
//   return `Las edades son ${singleAge.age}`; // Itera sobre la Array!
// });
// console.log(ages);  Aqui iteramos cada item imprimiendolo
//
// const newPeople = people.map(function (individual) {
//   return {
//     firstName: individual.name,
//     indivAge: individual.age,
//     indivJob: individual.job,
//   };
// });
// console.log(newPeople);
// Aqui iteramos cada item, creando una nueva Array de objetos
//
// EJEMPLO VIDA REAL
// Tomamos una key de un objeto, la pasamos a un HTML tag.
// const namesToHtml = people.map(function (person) {
//   return `<h1>${person.name}</h1> `;
// });
// console.log(namesToHtml);
// document.body.innerHTML = namesToHtml.join(' ');

// -----> Filter <-----
// New Array, Manipulate the size of newArr, based on condition
// EMPTY ARRAY = NO MATCH IN CONDITION.
// const youngPeople = people.filter(function (person) {
//   return person.age <= 25;
// });
// console.log(youngPeople);
//
// const devPeople = people.filter(function (person) {
//   return person.job === 'Designer';
// });
// console.log(devPeople);

// -----> FIND <-----
// Returns Single Instance = An Object
// first match, Undef if no match,
//Used for getting an unique value
const people2 = [
  { name: 'Bob', age: 20, job: 'Developer', id: 1 },
  { name: 'Peter', age: 25, job: 'Designer', id: 2 },
  { name: 'Peter2', age: 25, job: 'Designer', id: 2 }, // para mostrar que tira el primero unicamente
  { name: 'Tom', age: 31, job: 'Front-End', id: 3 },
];
// const personByID = people2.find(function (person) {
//   return person.id === 2;
// });
// console.log(personByID);
// const names1 = ['tom', 'Katy', 'Perro', 'Gato'];
// console.log(
//   names1.find(function (name) {
//     return name === 'Perro';
//   })
// );
// :::: DIFERENCIA FILTER (array) VS FIND (object)
// Filter:
// const personFilter = people2.filter(function (person) {
//   return person.id === 3;
// });
// console.log(personFilter); // Devuelve una array con el objeto dentro hay que acceder con un INDEX
// console.log(personFilter[0].name); // Asi devuelve el name
// // Find:
// const personFind = people2.find(function (person) {
//   return person.id === 3;
// });
// console.log(personFind.name); // Devuelve el objeto TOM.

//  -----> REDUCE <-----
// Iterates, CallBack Function
// Reduces to a Single Value: Number, Array, Object
// Pasamos 2 parametros:
// ACC --> Acumulator: Total of all the calculations (Value we will return)
// CURR --> Current: Current iteration / value.
// const people3 = [
//   { name: 'Bob', age: 20, job: 'Developer', id: 1, salary: 200 },
//   { name: 'Peter', age: 25, job: 'Designer', id: 2, salary: 300 },
//   { name: 'Peter2', age: 25, job: 'Designer', id: 2, salary: 400 }, // para mostrar que tira el primero unicamente
//   { name: 'Tom', age: 31, job: 'Front-End', id: 3, salary: 500 },
// ];
// const totalSalary = people3.reduce(function (acc, currItem) {
//   console.log(`Total so far: ${acc}`);
//   console.log(
//     `Current Salary to pay: ${currItem.salary}. Employee: ${currItem.name}`
//   );
//   acc += currItem.salary;
//   return acc; // ALWAYS METERLO
// }, 0); //ESPECIFICA QUE VALUE TYPE NOS DA y Initial Value!!
// console.log(`Total a pagar en Salarios: ${totalSalary}`);

//  :::::::::::::: Math Object
// Built In Function!
// const number = 4.56789;
// const result = Math.floor(number); // Redondea Al Piso
// const result = Math.ceil(number); // Redondea Arriba
// const result = Math.sqrt(number); // Raiz Cuadrada
// const result = Math.min(1, 2, 20, 15, 14, 18, 9, 100); // Numero Minimo de los pasados
// const result = Math.max(1, 2, 20, 15, 14, 18, 9, 100); // Max
// const result = Math.random(); // Never going to be 1
// const result = Math.floor(Math.random() * 10 + 1); // 0-10 Rnadom
// console.log(result);

//  :::::::::::::: Date Object
//Built In Function!
// Creamos una var que contenga la func
// Month nos tirará el NUMERO: (considerando January 0 )
// const dateFunc = new Date();
// console.log(dateFunc);

// const actualMonth = dateFunc.getMonth();
// const months = [
//   'Enero',
//   'Febrero',
//   'Marzo',
//   'Abril',
//   'Mayo',
//   'Junio',
//   'Julio',
//   'Agosto',
//   'Septiembre',
//   'Octubre',
//   'Noviembre',
//   'Diciembre',
// ];
// console.log(months[actualMonth]);

// const actualDay = dateFunc.getDay();
// const days = [
//   'Domingo',
//   'Lunes',
//   'Martes',
//   'Miercoles',
//   'Jueves',
//   'Viernes',
//   'Sabado',
// ];
// console.log(days[actualDay]);
// console.log(dateFunc.getDate());
// console.log(dateFunc.getFullYear());

// // Construimos algo:
// const sentence = `${days[actualDay]} ${dateFunc.getDate()} de ${
//   months[actualMonth]
// }, de ${dateFunc.getFullYear()} `;
// console.log(sentence);

// TERMINADO TUTORIAL CONTINUED
