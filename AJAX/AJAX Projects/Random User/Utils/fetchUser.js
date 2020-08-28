// ::::: URL for API ::::::
const URL = 'https://randomuser.me/api/';
// :::: Main Function ::::
const getUser = async () => {
  const response = await fetch(URL);
  //   console.log(response); // Status 200
  const data = await response.json();
  // console.log(data); // Object que contiene RESULTS (Array) y lo que nos interesa es el index 0
  // DESTRUCTURE THE OBJECT:
  const person = data.results[0]; // Object Completo, vemos dentro y elegimos lo que queremos
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const { age } = person.dob;
  const {
    street: { number, name }, // Queremos esto dentro de street, doble nested
  } = person.location;
  // Return lo necesario, previamente Seleccionado:
  return {
    // Devuelve dicha Data que pondremos dentro de data-label; entonces debe coincidir el Nombre
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

// EXPORT
export default getUser;
