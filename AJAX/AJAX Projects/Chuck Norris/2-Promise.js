// :::::::::::: PROMISES :::::::::::::::
// Usamos Promises para simplificar un poco el 1-XHR

// ------------> Selections:
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';
//
// ---------------> Events:
btn.addEventListener('click', () => {
  //   console.log('Hello'); // Para probar que todo este bien
  getData(URL)
    // .then((response) => console.log(response)) // Para Ver el STR que contiene VALUE
    .then((response) => displayData(response)) //Response: Viene del Server, el RESOLVE(xhr)  || displayData(repsonse) = DATA, que será Parsed en la Function
    .catch((err) => console.log(err));
});
//
// ------------> Main Function:
function getData(url) {
  // La NEW PROMISE!
  return new Promise((resolve, reject) => {
    // Pegamos la Misma function que antes
    // Object XHR:
    const xhr = new XMLHttpRequest();
    // Pasamos los 2 Methods y one Property
    xhr.open('GET', url);
    xhr.send();
    // CB function de carga: Status 200 , ReadyState 4
    xhr.onreadystatechange = function () {
      // Si NO es 4:
      if (xhr.readyState !== 4) {
        return; // SI NO ES 4 : RETURN THIS FUNCTION, podemos hacer click y ver que no pasa nada, pero no hay errors
      }
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}
//
// ::: Display Data --> Agregamos como Parameter la DATA
function displayData(data) {
  img.classList.add('shake-img'); // ES INFINITA, queremos remover la Class, queremos removerla en un TIME random
  const { value: joke } = JSON.parse(data); // Solicitamos la value del Parsed STR y al mismo tiempo le damos ALIAS: Joke
  content.textContent = joke;
  // Remover el SHAKE:
  // Random number para el TIME:
  const randomTime = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, randomTime);
}
