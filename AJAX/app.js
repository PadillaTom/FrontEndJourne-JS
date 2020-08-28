// ::::::::::::: AJAX :::::::::::::::::
// AJAX --> Asynchronous Javascript and XML
// It is an HTTP Request.
// Communication between Client and Server
// Instead of hard Coding our websites we will use APIs
// API = Application Programing Interface --> Rules on HOW to communicate the server so he can give the Data we need.
//
//
//
//
// :::::::::::::::::::::::::::::::::  SIMPLE TEXT
// Creamos una Carpeta API que simulará un servidor.
// Tomaremos la data de dicha carpeta.
// Dentro de API tenemos un SampleText.txt con Lorem20
// LONG WAY ----> USING THE XHR OBJECT
//
// Creamos Object para Pedir el text
// const xhr = new XMLHttpRequest(); // Constructor para trabajar con APIs
// console.log(xhr); // Vemos: READYSTATE: 0 // STATUS: 0
//
// Pasaremos los Methods mas importantesdesde ---> .open(method, url,);
// xhr.open('GET', './API/sampleText.txt');
// console.log(xhr); // ReadyState: 1
// Ready State debe llegar a 4:
// 0) Created, not OPEN
// 1) Open() has been called
// 2) Send() has been called and we can use Header and Status
// 3) Downloading, RESPONSETEXT holds the data
// 4) DONE. Operation Complete
//
// Continuamos para tener el 2,3 y 4: IMPORTANTE ---> STATUS 200 // 404 = ERROR
// xhr.onreadystatechange = function () {
// Function de QUE HACER cuando lleguemos a 4
//   console.log(xhr); // Vemos como AUTOMATICAMENTE, se encarga del 2 3 y 4. Y vemos el STATUS: 200
// ENTONCES ---> Corremos la function, llegamos a 4 y stauts 200, LUEGO
// Queremos declarar que va a suceder una vez llegado a dicho punto:
//   if (xhr.readyState === 4 && xhr.status === 200) {
// SI se cumple:
// console.log('Funciona'); // Ejemplo
// console.log(xhr.responseText); // LOG el texto solicitado al Server.
// -------------> Ponemos un P en el Body
//     const text = document.createElement('p'); //Creamos el P
//     text.textContent = xhr.responseText; // Le damos contenido al Text
//     document.body.appendChild(text); // Add the Text to the Body as a child
//   } else {
// si NO se cumple: Mostrar stauts + Text
//     console.log({
//       status: xhr.status,
//       text: xhr.statusText,
//     });
//   }
// };
// xhr.send(); // SI NO HAY SEND NADA FUNCIONA!
// console.log('Hello World');
// HTTP REQUESTS: ASYNC -->
// TODO ESTO SUCEDE DE MANERA ASYNCHRONOUS, QUIERE DECIR QUE COMIENZA ENVIANDO AL BROWSER,
// CONTINUA CON LO QUE TIENE QUE HACER Y UNA VEZ QUE TERMINA LO QUE TIENE QUE HACER, RECIBE DEL BROWSER
// POR ESTO EN LA CONSOLA VEMOS EL HELLO WORLD ANTES QUE TODO EL RESTO.
//
//
//
//
// ::::::::::::::::::::::::::::::::::::: ADD A BUTTON
// Vamos al HTML y ponemos un BTN
// Metemos todo lo anterior en una FUNCTION
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  // Cuando Clickiemos agregaremos el P
  getData();
});
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './API/sampleText.txt');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      const text = document.createElement('p');
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
  xhr.send(); // SI NO HAY SEND NADA FUNCIONA
}
// LA MAGIA: No refreshea la webpage, lo agrega solicitando la Data al Server
//
//
//
//
// ::::::::::::::::::::::::::::::::::::::::::::::::::::: JSON
// JavaScrip Object Notation
// When Server Sends info to the Browser: Only as TEXT
// With JSON we can transform it to text, then transform it back
// Creamos el JSON file:
// son Arrays con dentro Objetos
// [ {"bla":"bla"}, {"bla":"bla",} ] TODO ENTRE COMILLAS: MENOS NUMEROS
