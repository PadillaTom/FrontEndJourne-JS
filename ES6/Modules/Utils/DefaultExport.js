// :::::::::: DEFAULT EXPORT ::::::::::::
const showPeople = (people) => {
  // Pasamos un Parameter: PEOPLE, que debe Match con el argument al ser invoked
  const newPeople = people
    .map((person) => {
      // console.log(person); // Vemos la lista de Person, cada una por separada
      const { name, job } = person; //Pedimos las Key para cada Person
      return `<p>${name} <strong>${job} </strong></p>`;
    })
    .join(''); // Sacamos la separacion Default = ","
  //   console.log(newPeople); // Aqui vemos cada item  listos para ser agregados en HTML
  return newPeople; // ---------> Esto se usa para cuando exportamos!
};

export default showPeople;

// Copiamos y pegamos la Function a exportar.
// Necesitamos pasar un parameter a la function: PEOPLE
//
// Con Named Export: Los names deben Matchear al ser importados
// Con Default Export: Podemos poner cualquier Name a lo importado
//
// ------------> WE CAN ONLY HAVE 1 EXPORT DEFAULT PER FILE
