// ::::::::: Fetch Drinks
//

//
const fetchDrinks = async (url) => {
  //   return 1; // Para Comprobar
  try {
    // SI encuentra:
    const response = await fetch(url); // Pasamos el URL
    const data = await response.json(); // Transformamos en Array
    return data; // Devuelve ese Array
  } catch (error) {
    // si NO Encuentra
    console.log(error);
  }
};

// Export Default
export default fetchDrinks;
