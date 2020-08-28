const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('No such element');
};
// Export Default
export default getElement;
