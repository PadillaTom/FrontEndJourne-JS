// ::::::::::: BUDGET APP ::::::::::
//
// Usamoes ES6, con Class Syntax
// Class que dentro tiene Constructor.
// Constructor tiene dentro: Selections + Methods.
// Lo que haremos será llamar a los methods como "instances" dentro del constructor.
class UI {
  constructor() {
    this.budgetFeedback = document.querySelector('.budget-feedback');
    this.expenseFeedback = document.querySelector('.expense-feedback');
    this.budgetForm = document.getElementById('budget-form');
    this.budgetInput = document.getElementById('budget-input');
    this.budgetAmount = document.getElementById('budget-amount');
    this.expenseAmount = document.getElementById('expense-amount');
    this.balance = document.getElementById('balance');
    this.balanceAmount = document.getElementById('balance-amount');
    this.expenseForm = document.getElementById('expense-form');
    this.expenseInput = document.getElementById('expense-input');
    this.amountInput = document.getElementById('amount-input');
    this.expenseList = document.getElementById('expense-list');
    this.itemList = [];
    this.itemID = 0;
  }
  // Methods ----->
  //
  // ----> Submit Budget Form
  submitBudgetForm() {
    // console.log('hello'); // Events: ui.SubmitBudgetForm();
    //
    // Queremos conseguir el Valor de lo INgresado (budget-input)
    const value = this.budgetInput.value;
    // console.log(value); // Vemos Valor Input
    if (value === '' || value < 0) {
      this.budgetFeedback.classList.add('showItem'); // Already Done in CSS
      this.budgetFeedback.innerHTML = `<p> Not Empty nor Negative </p>`;
      // TIMEOUT : THIS apunta a window, lo cambiamos.
      const self = this; // Alojamos este THIS (que apunta a Budget Submit) en variable y la invokamos dentro de Timeout
      setTimeout(function () {
        self.budgetFeedback.classList.remove('showItem');
      }, 3500);
    } else {
      this.budgetAmount.textContent = value; // Damos valor al BudgetAmount
      this.budgetInput.value = ''; // Vaciamos el INPUT
      this.showBalance();
    }
  }
  //
  // ----> Show Balance Method:
  showBalance() {
    // console.log(`Hey`); // Probamos
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense; // El value pasado a INTEGER
    this.balanceAmount.textContent = total; // Amount ingresado - expenses
    // Mostramos con ciertas condiciones:
    if (total < 0) {
      this.balance.classList.remove('showGreen', 'showBlack'); // Sacamos clases predeterminadas
      this.balance.classList.add('showRed'); // Agregamos BTN ROJO
    } else if (total > 0) {
      this.balance.classList.remove('showRed', 'showBlack');
      this.balance.classList.add('showGreen');
    } else if (total === 0) {
      this.balance.classList.remove('showRed', 'showGreen');
      this.balance.classList.add('showBlack');
    }
  }
  // TotalExpense (suma de todos elementos de la List)
  totalExpense() {
    let total = 400; // Probamos con Hard Code
    return total;
  }
}

// Events
function eventListeners() {
  // Seleccion de variables which has elements selected from DOM
  const budgetForm = document.getElementById('budget-form');

  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');
  //
  // new Instance of UI Class: Usaremos "ui" para poder llamar a la Class UI Principal
  const ui = new UI();
  //
  // Budget Form Submit
  budgetForm.addEventListener('submit', function (event) {
    // Prev Default de forms:
    event.preventDefault();
    ui.submitBudgetForm();
  });
  //
  //Expense Form Submit
  expenseForm.addEventListener('submit', function (event) {
    // Prev Default de forms:
    event.preventDefault();
  });
  //
  // Expense List Click
  expenseList.addEventListener('click', function () {
    //
  });
}
//
// DOM Loaded
document.addEventListener('DOMContentLoaded', function () {
  eventListeners();
});
//
//
//
//
//
//
//
//
//
// CONCLUSION:
// Tenemos la CLASS UI
// CONSTRUCTOR : Donde llamamos  las Selecciones
// METHODS: Crearemos Functions a ser invokadas en Events
// EVENTS: Invokaremos las Funct creadas en Methods --> ui.Funct
// Metodo de trabajo: Agregamos los methodos al Constructor y los pasamos en los EVENTS
