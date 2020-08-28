// Imports
import get from './getElement.js';
// Values:
// ---------->  Selections:
// const URL = 'https://randomuser.me/api/';
const img = get('.user-img');
// console.log(img); // Vemos que funciona
const title = get('.user-title');
const value = get('.user-value');
// const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')]; // Transofmra NodeList en Array

// --------------> Display User <--------------
// Pasamos PERSON: a quien le tomaremos el KEY deseado.
const displayUser = (person) => {
  //Image:
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is:`; // En caso de haber olvidado pasarlo como Template Literal previamente
  btns.forEach((btn) => {
    // Removemos ACTIVE
    btn.classList.remove('active');
  });
  btns[0].classList.add('active'); // Damos ACTIVE al Primer BTN por default
  // Funcionalidad BTNS
  btns.forEach((btn) => {
    // console.log(btn); // Vemos los BTNS
    const label = btn.dataset.label; // Juntamos la data: Label para meterla dynamicamente
    btn.addEventListener('click', () => {
      // console.log(person[label]); // Vemos lo que nos da cada BTN
      title.textContent = `My ${label} is: `;
      value.textContent = person[label];
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
      btn.classList.add('active');
    });
  });
};

//Export
export default displayUser;
