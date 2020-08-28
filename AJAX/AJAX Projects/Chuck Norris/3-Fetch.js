// :::::::::: FETCH ::::::::
// Usando Fetch solo necesitamos el URL (promised Based)
// .then(data) la pasamos a JSON (que a su vez devuelve una Promised Based)
// .then al JSON donde meteremos la funcion de conseguir el Value y pasarlo como JOKE dentro del CONTENT (<p>)
//.catch para LOG el error
//
//
//
// ------------> Selections:
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';
//
// ---------------> Events:
btn.addEventListener('click', () => {
  // Fetch: Provided by Browser; GET is Default, solo necesitamos pasar URL
  // Al ser Promised Based, directamente podemos pasar un .then, .catch
  fetch(URL)
    // Aplicamos el THEN directamente y nos devuelve la DATA
    // .then((data) => console.log(data)); // A la response le podemos dar un .JSON(), que a su vez da un Promised Based
    // .then((data) => data.json().then((response) => console.log(response))); // Aqui vemos el Object que necesitamos!
    .then((data) => data.json().then((response) => displayData(response)))
    .catch((err) => console.log(err)); // Pasamos la RESPONSE como DATA
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
