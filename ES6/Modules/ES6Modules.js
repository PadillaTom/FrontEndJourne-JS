// ::::::::::::: ES6 MODULES ::::::::::::::::::
// Module: One statement placed in a separate File.
// We can Reach this module whenever we need this statement
// We don't have to navigate one GIANT file of JS.
// React uses the SAME! SYSTEM!!!

// -----------------------> Setup <--------------------------
// Ejercicio Simple: Tenemos unos Array en js, cuando click shows the array in the div container
// Haremos without Modules:
const people = [
  { name: 'Tom', job: 'Dev' },
  { name: 'Katy', job: 'Design' },
  { name: 'Rafa', job: 'Boss' },
];
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// Funcion - Nuevo Array = map de people. Imprimiendo cada Person -
const showPeople = () => {
  const newPeople = people
    .map((person) => {
      // console.log(person); // Vemos la lista de Person, cada una por separada
      const { name, job } = person; //Pedimos las Key para cada Person
      return `<p>${name} <strong>${job} </strong></p>`;
    })
    .join(''); // Sacamos la separacion Default = ","
  //   console.log(newPeople); // Aqui vemos cada item  listos para ser agregados en HTML
  container.innerHTML = newPeople; // Aqui vemos la lista reflejada en DIV CONTAINER
};
// Al Click, Invoke Function
btn.addEventListener('click', () => {
  showPeople();
});

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//

// -----------------------> <--------------------------
//
//
//
