/* Funcion para "desordenar" los items de un array
Basado en el algoritmo de Fisher-Yates y Donald Knuth
Obtenido de la página Kirupa (todos los derechos sobre esta funcion le pertenecen)
Link: https://www.kirupa.com/html5/shuffling_array_js.htm
*/

const shuffle = (input) => {
  for (let i = input.length - 1; i >= 0; i -= 1) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
};

export default shuffle;
