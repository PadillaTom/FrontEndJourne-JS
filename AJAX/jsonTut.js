// ::::::::::::::::::::::::::::::::::::::::::::::::::::: JSON
// JavaScrip Object Notation
// When Server Sends info to the Browser: Only as TEXT
// With JSON we can transform it to text, then transform it back
// Creamos el JSON file:
// son Arrays con dentro Objetos
// [ {"bla":"bla"}, {"bla":"bla",} ] TODO ENTRE COMILLAS: MENOS NUMEROS
//
// WHEN WE COMMUNICATE WITH THE SERVER WE MUST DO IT IN A STRING WAY
// WE TRANSFORM TO STR, THEN RETURN TO THE ARRAY OR OBJECT OR ANYTHING
// TO BE DISPLAYED
// To send: Stringify
// To recieve: Parse
//

// Selecciones
const btn = document.querySelector('.btn');
const url = './API/jsonTut.json';
// Events
btn.addEventListener('click', () => {
  // Cuando Clickiemos agregaremos el P
  getData(url);
});
// Main Function:
function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //   console.log(typeof xhr.responseText); // Vemos que el JSON es un STRING!!
      //Transformar de STR to Object:
      const dataObject = JSON.parse(xhr.responseText);
      //   console.log(dataObject); // Vemos que es un Array de Objects!!!
      // Display the Data:
      const displayData = dataObject
        .map((item) => {
          return `<p>  ${item.name}   </p>`;
        })
        .join(''); // JOIN PARA QUITAR LAS COMMAS
      // Creamos Elemento que contendra el P:
      const element = document.createElement('div');
      // A dicho elemento le agregamos el P
      element.innerHTML = displayData;
      // Al Body le agregamos el Elemento que contiene un P ( <div> <p>)
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
  xhr.send();
}
