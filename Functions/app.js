// :::::::: FUNCTIONS ::::::::::
// Veremos ---> IFFE, HOISTING, CLOSURE

// *************************** IFFE : Immediately Invoked Function Expression
// manera antigua de hacer lo de Modules
// Its a good way to protect the scope of the functions and the variables within it.
//
// const num1 = 30;
// const num2 = 50;
// // num1 = 70; // ERROR al tener la CONST num1
// function add() {
//   console.log(`The result is: ${num1 + num2}`);
// }
// add();
// Si solo quiero sumar... No sería mas facil meter todo en el mismo lugar y luego invokarlo?
// SOLUTION: IFFE
// ---------> (function(){})(); -->function sin name  y luego invokarla
// (function () {
//   const num3 = 50;
//   const num4 = 100;
//   console.log(`Result is : ${num3 + num4}`);
// })();
// console.log(num1);
// console.log(num3); // ERROR "not defined", porque esta dentro de una func.
//
// En definitiva nos ayuda a PROTECT las variables dentro de la Func
//
// Podemos pasar Arguments: Y ver su resultado
// (function (numa, numb) {
//   console.log(`Result is: ${numa + numb}`);
// })(10, 20);
//
// ********************************  HOISTING: Function and var are Hoisted
// const firstName = 'john';
// let lastName = 'Padi';
// var random = 'Random';
// console.log(firstName);
// Hasta aqui es todo normal. PERO --> Usando Functions y VAR declarations las podemos Invokar incluso antes de ser Assignadas or Declared
// De todas formas es mas seguro acceder una vez declaradas (no antes)
// Function:
// display(); // Invokamos antes de declararla
// function display() {
//   // Declaramos la Func
//   console.log('hello');
// }
// Si dentro de la Func metemos var, const, let, declarados por fuera de la Func...
// Tendremos que Invokar la Func, DESPUES de dichas declaraciones.
//
// Var:
// console.log(varTest); //Accedemos pero tira Undefined
// var varTest = 'Hello';
// console.log(varTest);
//
//
//
// ********************************* CLOSURE: Access to an outer Function's Scope from an Inner Functions
// We can make PRIVATE variables with Closure!
//
// function outer() {
//   console.log('Hello World, i am Outer'); // Imprime la Outer
//   let innerMayAccess = 'Top Secret';
//   function inner() {
// Declaramos una Function dentro de Outer
// console.log(`Hello there the secret is:`); // Imprime Inner
// console.log(innerMayAccess);
//   }
//   return inner;
//   inner(); // LLamamos a la Inner dentro de Outer
// }
// outer(); // Lammamos Outer (Corre todo lo que tenga dentro)
//
// Functions can Take Functions as Arguments and can Return Functions
// Necesitamos alojar dicha Funct en una variable para ser invocada( hay dos maneras)
// const value = outer();
// console.log(value); // Vemos todo lo que contiene la Function
//
// value(); // 1) Invokamos la Variable a modo de Function ---> La mas Usada
// outer()(); // 2) Invokamos la Funct mas la Inner (tener en cuenta que invoka completa la Outer + inner)
//
// Inner Puede Acceder a Variables dentro de Outer, pero de Afuera hacia Outer no podemos ingresar, por SCOPE
// console.log(innerMayAccess); // ERROR, como que no existe
// value(); // Si invokamos: Outer - Inner + innerMayAccess

//
//
//
// :::::: Practicas ::::::
// Closure:
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hello ${name}, Your balance is: ${balance}`);
  }
  //   return showBalance;
  function deposit(amount) {
    balance += amount;
    showBalance();
    console.log(
      `Okay ${name}... You deposit was: ${amount}. And your new Balance is ${balance}`
    );
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`No money`);
      return;
    } else {
      balance -= amount;
      showBalance();
      console.log(
        `Okay ${name}... You deposit was: ${amount}. And your new Balance is ${balance}`
      );
    }
  }

  return { showMoney: showBalance, putMoney: deposit, takeMoney: withdraw }; // METHOD CLOSURE
}
// Que pasa si invocamos newAccount?
// newAccount('Tom', 5000); // NADA
// newAccount('Tom', 5000)(); // Hello Tom, youy balance is: 5000
//
// Usamos Variables para pasar multiple Instances
const john = newAccount('john', 1000);
const bob = newAccount('bob', 3000);
// john();
// bob();
// ShowBalance(CLOSURE) recuerda cual fue el valor Returned, and from here now it will show that Value
// the value set in NewAccount. Name and initialBalance
//
//
// ... so... Creamos newAccount y le asignamos los valores.. pero Normalmente pasaría esto como un METHOD
// por si queremos depositar, retirar dinero, etc.
// Podemos Crear un METHOD que sea CLOSURE: Imprime lo que querramos de John o Bob.
john.showMoney();
bob.showMoney();
// Ademas podemos agregar mas functions as Method Closure!!!
// ej: Deposit, withdraw
john.putMoney(10000);
bob.takeMoney(5000);
// Vemos como podemos Invokar a partir de las Method Closure.
// La gracia es que podemos  Crear Accounts como querramos y siempre serán CORRECTAS, apuntarán al valor asociado al NAME!!!!!
// Nadie puede acceder a dichos valores... UNICAMENTE con los methodos que hemos diseñado.
// Por ejemplo: NO CONTROLAMOS EL BALANCE:
bob.balance = 1000000;
bob.showMoney(); // Vemos que no podemos modificar lo Mostrado, ya que solo se tiene acceso desde las Inner Functions (Methods) Closures.
