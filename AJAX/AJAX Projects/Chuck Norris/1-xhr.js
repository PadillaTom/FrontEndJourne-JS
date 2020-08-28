// :::::::::: XHR SHAKE ::::::::::::
// Tenemos la Funcionalidad, mas el Shake del Chuk.
// Luego en el APP JS Iremos agregando mas features, como
// PROMISES, ASYNC AWAIT

// Selections:
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';
// Events:
btn.addEventListener('click', () => {
  //   console.log('Hello'); // Para probar que todo este bien
  getData(URL);
});
// Main Function:
function getData(url) {
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
      //   console.log(xhr.responseText); // Vemos que nos devuelve una STR (usaremos JSON Parse para acceder a Value)
      // SLOWER WAY:
      //   const response = JSON.parse(xhr.responseText);
      //   console.log(response); // Vemos el OBJECT
      // Agregamos SHAKE a la img!
      img.classList.add('shake-img'); // ES INFINITA, queremos remover la Class, queremos removerla en un TIME random
      // **** FASTER WAY:
      const { value: joke } = JSON.parse(xhr.responseText); // Solicitamos la value y al mismo tiempo le damos name: JOKE
      content.textContent = joke;
      // Remover el SHAKE:
      // Random number para el TIME:
      const randomTime = Math.random() * 1000;
      setTimeout(() => {
        img.classList.remove('shake-img');
      }, randomTime);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
