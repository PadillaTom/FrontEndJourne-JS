//  :::::::::::::: String Properties and Methods
// Don't learn all methods. Search them in Google
// let text = 'Tomas Padilla';
// -----> LENGTH <-----
// Cantidad de Caracteres.
// let resultLength = text.length;
// console.log(resultLength);
//-----> LOWER and UPPER case. <-----
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// -----> CHARAT <-----
// console.log(text.charAt(4));
// console.log(text.charAt(12));
// console.log(text.charAt(text.length - 1));
// -----> INDEXOF <-----
//If i don't have it in my string: -1;
// If there are lots: Returns the first one.
// console.log(text.indexOf('a'));
// -----> TRIM <-----
//Si tengo un espacio al principio, lo acorta hasta la primer letra.
// console.log(text);
// console.log(text.trim());
// Ej: tenemos " Tomas Padilla" --> Con espacio antes
// let text2 = ' Tomas Padilla';
// console.log(text2.startsWith('Tomas'));
// Nos tira FALSE : PORQUE NO PUSIMOS EL ESPACIO ANTES DE TOMAS
// Solucion:
// console.log(text.trim().toLocaleLowerCase().startsWith('tomas'));
// TRUE!!!!!!!!!
// -----> INCLUDES <-----
// Por supuesto podemos aplicar la misma solucion que antes
// console.log(text.includes('oma'));
// -----> SLICE <-----
// From , To:
// console.log(text2.slice(1, 4)); // From 1, to 4.
// console.log(text2.slice(-7)); //From last -7.

//  :::::::::::::: Template Literals
// We use BACKTICK Characters
// Perform Operations: ${}
// No need to escape
// USADO EN EL DOM PARA INSERTAR ELEMENTOS
// let name = 'tom';
// const string = `hello i'm *\ asd ${name} ${5 * 5} `;
// console.log(string);

//  :::::::::::::: Arrays Prop and Methods
// let namesList = ['tom', 'katy', 'july'];
// // -----> LENGTH <-----
// console.log(namesList.length);
// console.log(namesList[namesList.length - 1]);
// console.log(namesList[1]);
// //  -----> CONTACT<-----
// let lastList = ['pepe', 'padi', 'torres'];
// const allNames = namesList.concat(lastList);
// console.log(allNames);
// //-----> REVERSE <-----
// console.log(allNames.reverse());
// // -----> SHIFT / UNSHIFT <-----
// // Unshift :Agrega al comienzo de la lista.
// allNames.unshift('katy2');
// allNames.unshift('padi2');
// console.log(allNames);
// //Shift: Remueve el priemro de la lista
// allNames.shift();
// allNames.shift();
// console.log(allNames);
// // -----> PUSH / POP <-----
// // Pop: Remueve el final
// allNames.pop();
// console.log(allNames);
// // Push: Agrega al final de la lista
// allNames.push('tom2');
// console.log(allNames);
// // -----> SPLICE <-----
// // MODIFICA REALMENTE LA ARRAY!!!! (mutate)
// // splice (index de comienzo, Cuantos remueve)
// let specificNames = allNames.splice(-1, 1); // A partir del ultimo index, tomar 1 solo item.
// console.log(specificNames);
// console.log(allNames);

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//

//  ::::::::::::::
//
//
//
//
