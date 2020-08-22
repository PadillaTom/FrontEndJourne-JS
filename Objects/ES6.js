// Es6 Syntactic Sugar
// Usando clases la sntax es mas limpia
class Account {
  constructor(name, initialBalance) {
    // SPECIAL KEYWORD
    this.name = name;
    this.balance = initialBalance;
  }
  bank = 'Padis Banks';
  deposit(amount) {
    this.balance += amount;
    console.log(`Your New Balance is ${this.balance}`);
  }
}

const tom = new Account('tom', 0);
console.log(tom); // Vemos que dentro de la CLASS ACCOUNT hay un constructor
console.log(tom.name); // Accedemos a valores
// Para pasar valores dentro de la instance se usa CONSTRUCTOR(){}
tom.deposit(1000); // Accedemos a deposit
//
// Si queremos algo como PROTOTYPE se usará:
// bank = "Padis Bank" ---> SIN THIS
//
//
