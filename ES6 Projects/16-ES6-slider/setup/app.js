import people from './data.js';
// console.log(people); // Comprobamos que este bien asociado: vemos el Array

// Seleccionamos:
const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Main Function ::
// Probamos que funcione el container y el Array:
// container.innerHTML = 'Hello'; // Probamos que sobreescribe el resto
container.innerHTML = people
  .map((person, slideIndex) => {
    //   console.table(person); // Vemos en modo TABLE los objetos del array
    // -----> Destructure the objects
    const { img, name, job, text } = person;
    // -----> More magic later: Extra Classes para slide:
    let position = 'next'; // TODAS RECIBEN ESTO
    if (slideIndex === 0) {
      // SI ES LA PRIMERA EN ARRAY: ACTIVE
      position = 'active';
    }
    if (slideIndex === people.length - 1) {
      // SI ES LA ULTIMA EN ARRAY: LAST
      position = 'last';
    }
    //   return 'Hello'; // Vemos como Itera para los 3 items.
    // -----> RETURN THE DYNAMIC STUFF:
    return `<article class="slide ${position}">
          <img
            src=${img}
            alt="${name}"
            class="img"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>`;
  })
  .join('');

//Slider Function: Que Queremos? Target las classes: Active, Last, Next
const startSlider = (type) => {
  //   console.log('Hello World'); // Probamos que funcione
  //   console.log(type); // Probamos el Type al hacer Click, el type lo damos nosotros
  // ---------> Seleccionamos:
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  // Tambien nos sirve la Next Slide
  let next = active.nextElementSibling; // Next
  //   console.log(next); // Comprobamos que sea la sig Slide
  // --> Aseguramos de Remover todas las Classes al click y agregar la correcta
  // SE NOS ACABAN LAS SIBLINGS DEL ARRAY:
  if (!next) {
    next = container.firstElementChild; // Si no hay mas, volver al primero
  }
  active.classList.remove(['active']); // Al ser un Array de Classes (por tener varias)
  last.classList.remove(['last']); // Pasamos la Class como un Array
  next.classList.remove(['next']);

  // PREVIOUS:
  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling; // Asignamos un Nuevo NEXT
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(['next']); // Removemos el Nuevo Next
    next.classList.add('last'); // Se agregará segun corresponda
    return;
  }

  // Add CLasses: Vamos pasando Last-Active y llenando el resto de Next
  active.classList.add('last'); // La activa la movemos a la Izq (Ultima)
  last.classList.add('next'); // Se mueve to the Right
  next.classList.add('active'); // Se mueve al Active
};

// Clicks:
nextBtn.addEventListener('click', () => {
  startSlider();
});
prevBtn.addEventListener('click', () => {
  startSlider('prev');
});
