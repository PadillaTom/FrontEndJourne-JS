// :::::::::: ES6 :::::::::::::
// Bron in 1995, it needs to keep up with time.
// New Versions. In 2015 = ES6.
// There is es7, es8. But ES6 is the LATEST MAJOR UPDATE.
// Here we will see as well es7, and es8.

// --------------------------> VAR, LET, CONST
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

// --------------------------> Template Strings
// `` --> Podemos pasar cualquier tipo de " " '' y variables.
// Ademas: ${} nos permite acceder a values!
// const name = 'TOM';
// console.log(`my name is : ${name}`);
//

// --------------------------> Template String HTML
// Lo mejor de Template Literals es poder usarla para HTML dynamicamente.
// result.innerHTML = `<p class="tu vieja"> ${num1+num2} </p>`
// Otro Ejemplo mas complejo:
const person = {
  // Tenemos un Array
  name: 'Tom',
  job: 'Tu vieja',
  hobbies: ['Surfing', 'baking', 'bowling'],
};
const result = document.getElementById('result'); // Seleccionamos el Elemento a modificar
result.innerHTML = `
<h2>${person.name}<h2>
<p>${person.job}<p>
<ul>${person.hobbies
  .map(function (item) {
    return `<li>${item}</li>`;
  })
  .join('')}</ul>
`; // MAP separa los elementos con Commas ",". usando JOIN (" ") Reemplazamos las Commas por espacios
//

// --------------------------> Tagged Template Literals
// Poder pasar las Template Literals por una Function.
//
//
//

// -------------------------->
//
//
//
//

// -------------------------->
//
//
//
//

// -------------------------->
//
//
//
//

// -------------------------->
//
//
//
//

// -------------------------->
//
//
//
//

// -------------------------->
//
//
//
//

// -------------------------->
//
//
//
//

// -------------------------->
//
//
//
//

// -------------------------->
//
//
//
//
