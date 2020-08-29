import sublinks from './data.js';

// Targeteamos Elementos:
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')]; // Pasamos a un Array, en vez de Node List
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

// Events -->
//
// Hide Show Sidebar:
toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});
//
//
// Add Content Dynamically a la ::: SIDEBAR ::: -->
// Usando Data --> Page, Sublinks, etc
// console.table(sublinks); // Vemos lo que tenemos
sidebar.innerHTML = sublinks
  .map((item) => {
    // console.log(item); // Vemos cada item
    // Destructure:
    const { links, page } = item;
    return `<article>
  <h4>${page}</h4>
  <div class="sidebar-sublinks">
  ${links
    .map((link) => {
      // Nos metemos dentro de links
      //   console.log(item); // Vemos todo el contenido de Link dentro de Items
      return `<a href="${link.url}">
    <i class="${link.icon}"></i>
    ${link.label}
    `;
    })
    .join('')}
  </div>
  </article>`;
  })
  .join('');
//
//
// Add Content Dynamically a la ::: SUBMENU ::: -->
// Creamos Submenu en HTML (aside "submenu")
linkBtns.forEach((btn) => {
  btn.addEventListener('mouseover', function (e) {
    // console.log(e.currentTarget); // Vemos como Funciona el "HOVER" = "MOUSEOVER"
    // submenu.classList.add('show'); // A esta altura el Submenu esta FIJO! debemos controlar (Top: Left: con JS)
    const text = e.currentTarget.textContent;
    // console.log(text); // Muestra el Contenido de cada Target, al pasar el Mouse
    //
    // Queremos ver las Coordenadas para cada BOTON! -->
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const bottom = tempBtn.bottom - 3; // Le restamos 3 al bottom, para sobreponer el Sub Menu sobre el Button
    const center = (tempBtn.left + tempBtn.right) / 2;
    // console.log(tempBtn);
    // Necesitamos tener las coordenadas del: Top, Left, Bottom (bot para saber donde comienza la sub)
    // <-- Fin Coordenadas
    //
    // Contenido --->
    const tempPage = sublinks.find(({ page }) => page === text);
    // console.log(tempPage); // Vemos en consola que la Page Coincide con el Contenido!
    // IF la page existe: DISPLAY CONTENIDO
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      //
      // Disponer de manera mas linda el contenido del Submenu
      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3'; // CSS Creado Previamente
      }
      if (links.length > 3) {
        columns = 'col-4';
      }
      //
      //

      // Ponemos contenido dentro del Submenu, un Div contendra los Links
      submenu.innerHTML = `
      <section>
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
          return `
          <a href="${link.url}">
          <i class="${link.icon}"></i> ${link.label}
          </a>
          `;
        })
        .join('')}
      </section>
      `;
    }
    //
    // Mostramos el Sub + Cambiar Left y Top por lo calculado previamente. Esto hara que el SHOW sea calculado para cada elemento
    // submenu.classList.add('show');
    // submenu.style.left = `${center}px`;
    // submenu.style.top = `${bottom}px`;
  });
});

// Esconder lo que no se Usa!
hero.addEventListener('mouseover', function (e) {
  submenu.classList.remove('show');
});
nav.addEventListener('mouseover', function (e) {
  // Queremos Esconder el Submen, SI NO se targetea los Buttons de la NavBar: Remove
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});
