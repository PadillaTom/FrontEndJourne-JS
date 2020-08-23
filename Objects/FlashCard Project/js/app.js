// ::::::::::::: FlashCards Projects ::::::::::::::::
// Tenemos el HTML, CSS + Classes a toggle, All JS Selectors.
// Usaremos una function EventListeners a ser invoked when DOM loads.
// Luego crearemos Constructors y functions a medida que se necesiten.
// Al fondo de todo ponemos el Listener del DOM, para que no moleste
//
// --------> PASOS <---------
// 1) Creamos func EventListeners, Listen to the DOM, and UI , Questions Constructors
// 2) Abrimos el formulario (show question) para ver mietnras trabajamos
//      Evt al showBTN que dará showItem
// 3) Activamos el Close BTN + hide question
//      Evt al closeBTN, remove showItem.
// 4) Form Submition
//      Prev Default + Feedback Error (IF: danger)
//      Feedback Succeed : Usamos la Question Constructor (ELSE: Agregamos object al Array DATA and id++)
//      4') Clear Inputs Fields --> Borramos el input de la question creada.
//          Add Question Card --> Usamos los values para display una card dentro de Question List (DIV)
// 5) Question Card Buttons and everything
//      5') Delete: Removemos la Class Delete-Flashcard
//      5') Show Answer: Toggle la class ShowItem
//      5') Edit: Seleccionamos la Question por ID, lo agregamos a DELETE aswell.
//      5')       Remove Element form DOM
//      5')       Modificamos Data (Array) con los nuevos objects restantes, Added to DELETE aswell
//      5')       Mostrar Question edited in Question Card
//
//
//
// Events
function eventListeners() {
  //Add question Btn
  const showBtn = document.getElementById('show-btn');
  // Question Card
  const questionCard = document.querySelector('.question-card');
  // Closes Card
  const closeBtn = document.querySelector('.close-btn');
  // Show Form to create Card
  const form = document.getElementById('question-form');
  // Respuesta a los values ingresados en Form
  const feedback = document.querySelector('.feedback');
  // Inside the Form
  const questionInput = document.getElementById('question-input');
  // Inside the Form
  const answerInput = document.getElementById('answer-input');
  // Shows all the questions
  const questionList = document.getElementById('questions-list');
  // Data: Alojamos all questions
  let data = [];
  // ID: Added to each and every question we generate
  let id = 1;
  //
  //
  //
  //
  //
  // New UI  Instance : para UI Constructor
  const ui = new UI();
  // Show Question <---------
  // Dentro llamaremos al Method que agregaremos al Prototype del UI constructor
  showBtn.addEventListener('click', function () {
    ui.showQuestion(questionCard);
  });
  // Hide Question <----------
  closeBtn.addEventListener('click', function () {
    ui.hideQuestion(questionCard);
  });
  // Form Submition <---------
  form.addEventListener('submit', function (evt) {
    evt.preventDefault(); // Para que la page no Refresh mientras we work.
    // Alojamos Values del input en variables
    const questionValue = questionInput.value;
    const answerValue = answerInput.value;
    // console.log(questionValue); // Comprobamos con cualquier valor  "asdasd"
    // console.log(answerValue);
    // Feedback ---> IF INPUTS EMPTY : SHOWITEM + BOOTSTRAP ICON
    if (questionValue === '' || answerValue === ' ') {
      feedback.classList.add('showItem', 'alert-danger');
      feedback.textContent = 'Text Inside BTN DANGER'; // Si queremos cambiar el texto del BTN DANGER
      // Temporizador para retirar BTN DANGER de 3.5s
      setTimeout(function () {
        feedback.classList.remove('alert-danger', 'showItem');
      }, 3500);
    } else {
      // Feedback ---> SUCCESS  ---> ELSE <----
      const question = new Question(id, questionValue, answerValue); // Necesitamos Id, title, answer --> Son dichos values del form
      data.push(question); // We add these values to the Array
      id++; // Incrementamos el ID para la next Question
      //console.log(data, id);    // Prueba para ver el Array
      //
      // ENTONCES --> Borrar fields, add question, show success
      ui.addQuestion(questionList, question);
      ui.clearFields(questionInput, answerInput);
    }
  });
  // Step 5 ---> Work with the question card
  questionList.addEventListener('click', function (evt) {
    evt.preventDefault(); // Prevenir ir al top de la web cuando click
    // console.log(evt.target); // Probamos con los Btns : Vemos las Classes que llevan los Hrefs
    if (evt.target.classList.contains('delete-flashcard')) {
      let id = evt.target.dataset.id; // Seleccionamos por ID
      //   console.log('Delte Btn');  // Probamos
      questionList.removeChild(
        evt.target.parentElement.parentElement.parentElement
      ); // Apuntamos a COL-MD-4
      //   console.log(data);  // Probamos un ANTES de Actualizar Array
      // Copiamos de "edit answer" para removerla del Array aswell
      let tempData = data.filter(function (item) {
        return item.id !== parseInt(id); // Pedimos TODO menos ID
      });
      data = tempData;
      //   console.log(data); // Probamos un AFTER de Actualizar Array
    } else if (evt.target.classList.contains('show-answer')) {
      //   console.log('Answer Btn'); // Probamos
      evt.target.nextElementSibling.classList.toggle('showItem');
      // Apuntamos al Next Sibling (clickamos en ANSWER pero queremos target la ShoItem que contiene el text)
    } else if (evt.target.classList.contains('edit-flashcard')) {
      // Select la Quesiton por ID
      let id = evt.target.dataset.id; // Usamos la ID que fue otorgada la Question
      // Sacarla del DOM
      questionList.removeChild(
        evt.target.parentElement.parentElement.parentElement
      ); // Apuntamos a COL-MD-4
      // Show the Question Card on top, to be edited
      ui.showQuestion(questionCard);
      // Encontrar la Question por ID (dado arriba)--> Filtramos la DATA (array)
      const tempQuestion = data.filter(function (item) {
        return item.id === parseInt(id); // Pedimos al Array el ID para el item (transformado a INTEGER)
      });
      // Rest of the Data (array)
      let tempData = data.filter(function (item) {
        return item.id !== parseInt(id); // Array quedará con el resto de los items
      });
      // PROBAMOS TODO HASTA AQUI: 1- Dlete, 2-Show Answer, 3- Edit so far: Open Question card , Remove Item form Array
      //   console.log(data); // Probamos un ANTES de Actualizar Array
      data = tempData;
      //   console.log(data); // Probamos un AFTER de Actualizar Array
      //
      // ADD la Temp Question al Question Card para Editar-->
      // Sabemos que la TempQuestion = Array, entonces debemos ingresar al primer INDEX (0)
      questionInput.value = tempQuestion[0].title; // Question Itself
      answerInput.value = tempQuestion[0].answer; // Answer
    }
  });
}

// UI Constructor: Pasaremos todas las Instances por aqui "ui.blablabla"
function UI() {}

// Method: SHOW QUESTION CARD and HIDE
UI.prototype.showQuestion = function (element) {
  element.classList.add('showItem');
};
UI.prototype.hideQuestion = function (element) {
  element.classList.remove('showItem');
};
//
// Question Constructor
function Question(id, title, answer) {
  this.id = id;
  this.title = title;
  this.answer = answer;
}
// ADD QUESTION!!!!
UI.prototype.addQuestion = function (element, question) {
  // WHERE, WHAT (QuestionList, Question)
  // Creamos DIV y agregamos los Valores
  const div = document.createElement('div');
  div.classList.add('col-md-4'); // Ya hecha en CSS
  div.innerHTML = `<div class="card card-body flashcard my-3">
     <h4 class="text-capitalize">${question.title}</h4>
     <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
     <h5 class="answer mb-3">${question.answer}</h5>
     <div class="flashcard-btn d-flex justify-content-between">

      <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="${question.id}">edit</a>
      <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase" data-id="${question.id}">delete</a>
     </div>
    </div>`;
  element.appendChild(div); // Agrega lo creado al DIV QUESTION LIST.
};

// Clear Fields after Succeed feedback
UI.prototype.clearFields = function (question, answer) {
  question.value = ''; //Dejamos los inputs vacios.
  answer.value = '';
};

// DOM Event Listener:
// Will make load stuff when the DOM is LOADED
document.addEventListener('DOMContentLoaded', function () {
  eventListeners();
});

//
//
// CONCLUSION:
// Agregamos una question, Podemos ver su answer, Delete it, Edit it: Volverla a mostrar con sus valores y poder modificarlas.
// Seleccionamos todos los elementos a utilizar
// Dentro de una MAIN function (eventListeners) pondremos la mayoria de code.
// Creamos algunas varbiales como ID y Data (array)
// Al LOAD the DOM: Disparamos la MAIN (eventListeners)
// Creamos CONSTRUCTORS donde pasaremos INSTANCES y PROTOTYPES
//
// Add Question: Creamos el element dentro del DOM con values dynamics
// Show Answer: Toggle class SHOWITEM al NextSibling (siendo ambos child, seleccionaremos el CONTENIDO del click event)
// Delete Question: Primero tomamos el ID del Elemento clickeado, Borramos del DOM, asi mismo borramos del Array y actualizamos el Array
// Edit: Primero Tomamos el ID del elemento clickeado, Sacamos del DOM y abrimos el Question Card. Dentro metemos como valores(input): Title and Answer.
//
