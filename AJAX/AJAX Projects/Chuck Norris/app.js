// Project as Exercise!!
// XHR Object, Promises, Fetch, and Async Await.
//
// Tenemos un HTML y cierto CSS hecho:
// Pondremos el joke en un P"content"
//
// API Docs --> We NEED to read every DOC for every API we will use (there may be a Blog, so search)
// Read more API, than work in my Project
// For this Project:  https://api.chucknorris.io/
//
// Que vemos? Root Endpoint (https://api.chucknorris.io/jokes/random)
// Que nos sirve? VALUE. Para meterlo en el P "Content"
//
// Tambien vemos que tienen Categorias y si queremos un Random dentro de una Categoria, vemos que tienen unos Query Parameters
// Al link dado le tenemos que enviar una de las categorías que nos da como opciones:
// https://api.chucknorris.io/jokes/random?category= {category} --> Elegir una Category
// https://api.chucknorris.io/jokes/categories --> Vemos el Array de categories
//
//  ******************* AQUI TRABAJAREMOS LA APP, Agregando y quitando features,
// De todas formas tenemos la 1-xhr.js donde esta la funcionalidad PRINCIPAL
//
//
// ------------> Selections:
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';
//
// ---------------> Events:
btn.addEventListener('click', async () => {
  try {
    // ejecutamos
    const data = await fetch(URL); // Esperamos al FECTH URL que este estable y luego tendremos acceso al data
    const response = await data.json(); // Esperamos al object de Data.Json() para tener access a Response
    displayData(response); // Una vez tenemos access a Response, pasamos la FUNC
  } catch (error) {
    // si hay error:
    console.log(error);
  }
});
//
// NO NECESITAMOS LA MAIN FUNCTION ( DE TODAS FORMAS ESTA EN 1 O 2 )
//
// ::: Display Data --> Agregamos como Parameter la DATA
function displayData({ value: joke }) {
  // PASAMOS DIRECTAMENTE EL VALUE AS JOKE ( COMO DATA )
  img.classList.add('shake-img'); // ES INFINITA, queremos remover la Class, queremos removerla en un TIME random
  //   const { value: joke } = data; // Al tener ya el OBJECT (por la JSON promise), no necesitamos PARSE
  content.textContent = joke;
  // Remover el SHAKE:
  // Random number para el TIME:
  const randomTime = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, randomTime);
}
