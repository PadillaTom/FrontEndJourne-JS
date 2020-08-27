const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'https://source.unsplash.com/random';
btn.addEventListener('click', () => {
  //   console.log(loadImage(url)); // Vemos que es una Promise Pending : Falta declarar Resolve, Reject
  loadImage(url)
    .then((imagenOk) => container.appendChild(imagenOk)) // Si todo OK, Append
    .catch((err) => console.log(err)); // Si mal LINK: Error
});
//
// ::::::::: FUNCTION BASE PARA COMENZAR A TRABAJAR :::::::::::
// function loadImage(url) {
//   //Long Way:
//   const promise = new Promise((resolve, reject) => {
//     //
//   });
//   return promise;
// }
//
// Luego establecida la function base: Comenzamos
function loadImage(url) {
  //Long Way:
  return new Promise((resolve, reject) => {
    // Creamos una Imagen, usando Constructor IMAGE:
    let img = new Image();
    img.addEventListener('load', () => {
      //   console.log('Everything Worked'); // If the Source is Correct
      resolve(img);
    });
    img.addEventListener('error', () => {
      //   console.log('Hubo un Error'); // Si la URL no concuerda a la pasada como variable
      reject(new Error('Error Amigo, Mal Link'));
    });
    img.src = url; // Asociamos la Url como Parametro de IMG.
  });
}
// Entonces:
// Una vez la LoadImage(url) Nos de el RESOLVE o REJECT.
// Asociamos dicha Function con el BTN.
// En caso de Resolve: then ---> Callback Function:
// Agregar la <img src:""> como Child al Container.
