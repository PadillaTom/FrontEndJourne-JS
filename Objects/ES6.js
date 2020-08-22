// ::::::: Es6 Syntactic Sugar :::::::
//
// Usando clases la syntax es mas limpia
// class Account { // Class Mayus
//   constructor(name, initialBalance) {
//     // SPECIAL KEYWORD that will run everything
//     this.name = name;
//     this.balance = initialBalance;
//   }
//   bank = 'Padis Banks'; // This is like a Prototype in ES6
//   deposit(amount) { // A function
//     this.balance += amount;
//     console.log(`Your New Balance is ${this.balance}`);
//   }
// }

// const tom = new Account('tom', 0);
// console.log(tom); // Vemos que dentro de la CLASS ACCOUNT hay un constructor
// console.log(tom.name); // Accedemos a valores
// Para pasar valores dentro de la instance se usa CONSTRUCTOR(){}
// tom.deposit(1000); // Accedemos a deposit
//
// Si queremos algo como PROTOTYPE se usará:
// bank = "Padis Bank" ---> SIN THIS
//
//
// :::::: Call  ||  Apply ||  Bind ::::::
// CALL ----->
// const john = {
//   name: 'John',
//   age: 25,
//   greet: function () {
//     console.log(this); // Mostramos a quien refiere THIS
//     console.log(`Hello i am ${this.name} and i'am ${this.age}`);
//   },
// };
// const bob = {
//   name: 'Bobby',
//   age: 40,
// };
// john.greet();
//
// Entonces si quremos la misma Function (greet) para 50k personas.... deberíamos copiar y pegar.....
// Solucion: usamos el CALL METHOD
// Call--> Runs instantly
// FUNCTION FROM OUTSIDE-->
// function greet(city) {
//   console.log(this);
//   console.log(`Hi i am ${this.name} and i am ${this.age}. I live in ${city}`);
// }
// greet.call(john);
// greet.call(bob);
// Pasamos los objects creados... si no hay creados?
// greet.call({ name: 'Tommy', age: 25 });
// FUNCTION AS METHOD:
// john.greet.call(bob); // Imprime BOB, agarrando el Method dentro de Tom
// Arguments in Function:
// greet.call(john, 'Capital');
// greet.call(bob, 'Olivos');
// greet.call({ name: 'Tommy', age: 25 }, 'Arg');
//
//
// APPLY ----->
// Retocamos la FUNC GREET (city)
// Igual que Call, pero por un ARRAY
// greet.apply(john, ['Collonges']);
// greet.apply(bob, ['haute']);
// greet.apply({ name: 'susan', age: 25 }, ['America']);
// Queremos meter una City
//
//
// BIND ------>
// Lo podemos asignar y usar mas tarde, Pasa LIST (como call)
// 1) Assign the greet
// const susanGreet = greet.bind({ name: 'Susy', age: 25 }, 'France');
// 2) Invoke the greet.
// susanGreet();
//
//
// !!!!!!!!! BUTTON EXAMPLE !!!!!!!!!!
// Funcion de sumar
const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};
// Seleccion de BTN
const btn = document.querySelector('.increment');

// FAIL --->
// btn.addEventListener('click', counter.increment);
// NAN !!!!  ---> THIS = Button. button not a number.

// Solution 1) BIND --> Elijo donde quiero alojar la function (counter)
// btn.addEventListener('click', counter.increment.bind(counter));
//
// Solution: LA MEJOR --> QUe pasa si queremos remover la EvtListener?
const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);
btn.removeEventListener('click', increment);
// Es buena por si queremos REMOVER el event listener pero de todas formas
// tener la posibilidad de Referencia al Function
