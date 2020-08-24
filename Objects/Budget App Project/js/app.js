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
      this.balance.classList.add('showGreen'); // Mostramos Verde
    } else if (total === 0) {
      this.balance.classList.remove('showRed', 'showGreen');
      this.balance.classList.add('showBlack'); // Standard Black
    }
  }
  //
  // ----> Submit Expense Form
  submitExpenseForm() {
    const expenseValue = this.expenseInput.value; // Agarramos value del INPUT
    const amountValue = this.amountInput.value; // Value del input
    if (expenseValue === '' || amountValue === '' || amountValue < 0) {
      this.expenseFeedback.classList.add('showItem'); // SI se da alguna condition: mostramos Feedback
      this.expenseFeedback.innerHTML = `<p> Cannot be Empty or - </p>`;
      const self = this; // Guardamos el THIS
      setTimeout(function () {
        self.expenseFeedback.classList.remove('showItem'); // Removemos el feedback
      }, 3500);
    } else {
      let amount = parseInt(amountValue); //Pasamos el Value a INTEGER
      this.expenseInput.value = ''; // vaciamos el INPUT
      this.amountInput.value = ''; // Vaciamos
      // Queremos Crear un OBJECT para pasarlo al Array donde alojaremos los valores y la mostraremos luego
      let expense = {
        id: this.itemID, // ID dado
        title: expenseValue, // Nombre del Gasto
        amount: amount, // Gasto pasado  a INT
      };
      this.itemID++; // Aumentamos la ID para el prox Item
      this.itemList.push(expense); // Agregamos la Expense (objecto creado) al Array
      this.addExpense(expense); // Add la Expense al Web
      // ----> Show Balance : Actualizar el nuevo Balance
      this.showBalance();
    }
  }
  //
  // ----> Add Expense (agregar la Expense , object, al Website)
  addExpense(expense) {
    const div = document.createElement('div');
    div.classList.add('expense');
    div.innerHTML = ` <div class="expense-item d-flex justify-content-between align-items-baseline">

         <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
         <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

         <div class="expense-icons list-item">

          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
           <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>`; // Las Expense ID, title, amount vienen del Object Creado
    this.expenseList.appendChild(div); // Agregamos todo lo creado COMO CHILD
  }
  //
  // ----> Edit and Delete Methods:
  // Edit -->
  editExpense(element) {
    // Usamos el Dataset-id dado en el DIV creado DYNAMIC
    let id = parseInt(element.dataset.id); // Tomamos el ID
    // Sacar el element de la List (Targeteamos el Parent quien los Display and remove it)
    // Usamos el LOG para visualizar en que nivel andamos
    let parent = element.parentElement.parentElement.parentElement; // EXPENSE-LIST
    // console.log(parent); // Visualizamos los niveles hasta encontrar PARENT GENERAL
    this.expenseList.removeChild(parent); // Removemos el child del EXPENSE-LIST
    // ** Una vez removido del DOM, queremos sacarlo del Array + Tomar valores y exponerlos en INPUT
    // 1) Una vez Removed from DOM: tomamos el ID para sacarlo del Array
    let expense = this.itemList.filter(function (item) {
      return item.id === id; // SI el id de este ITEM es = ald ID general del edit expense --> Return it, so i can work with it
    });
    // Sacamos el resto que no Match el ID, del ARRAY
    let tempList = this.itemList.filter(function (item) {
      return item.id !== id;
    });
    // FASE FINAL: asignar la Array Principal a la Nueva Array sin el elemento tomado por ID
    this.itemList = tempList;
    this.showBalance(); // --> SIEMPRE MOSTRAR NUEVO BALANCE
    // 2) Add Values to the Input Fields
    this.expenseInput.value = expense[0].title; // Tomamos el Primer index del nuevo array (contiene el elemento a eliminar, seleccionado por ID. NADA MAS)
    this.amountInput.value = expense[0].amount;
  }
  // Delete -->
  deleteExpense(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    this.expenseList.removeChild(parent); // Removemos from DOM
    let tempList = this.itemList.filter(function (item) {
      return item.id !== id; // Removemos from Array
    });
    // FASE FINAL: asignar la Array Principal a la Nueva Array sin el elemento tomado por ID
    this.itemList = tempList;
    this.showBalance(); // --> SIEMPRE MOSTRAR NUEVO BALANCE
  }
  //
  // ----> TotalExpense (suma de todos elementos de la List)
  totalExpense() {
    // let total = 400; // Probamos con Hard Code
    let total = 0; // Comenzamos con el monto 0
    if (this.itemList.length > 0) {
      // console.log(this.itemList); // Vemos el Array Creado, Falta trabajar sus Objects
      total = this.itemList.reduce(function (acc, curr) {
        // console.log(`total ${acc} and current : ${curr.amount}`);
        acc += curr.amount; // En pocas palabras: ACC = INDEX // CURR = OBJECT
        return acc; // SIEMPRE RETURN ACC
      }, 0); // 0 = El tipo de data ( numero y comenzando de 0)
    }
    this.expenseAmount.textContent = total; // Actualizamos el Valor. Si no se da la condicion = 0
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
  // Expense Form Submit
  expenseForm.addEventListener('submit', function (event) {
    // Prev Default de forms:
    event.preventDefault();
    ui.submitExpenseForm();
  });
  //
  // Expense List Click
  expenseList.addEventListener('click', function (event) {
    // Encontrar donde Clickeamos , a que elemento
    // console.log(event.target); // Vemos que edit= href // delete= icon
    // Usar los elementos deseados: HREF
    if (event.target.classList.contains('edit-icon')) {
      ui.editExpense(event.target);
    } else if (event.target.parentElement.classList.contains('delete-icon')) {
      ui.deleteExpense(event.target.parentElement);
    }
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
//
// TIP:
// Siempre que querramos hace elementos dinamicos, conviene Hacer la Web
// en HTML y CSS, estatica, y luego (una vez creada la Dynamic Elements),
// Coment the static HTML Out.
// Pocas Palabras: Make it in HTML, apply classes, Coment it out and addit with Template Literals
