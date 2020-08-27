// :::::: NAMED EXPORT ::::::::::::::
//
// Now we need to export this data!
// we are going to use Named Export
//
// En el original file , o el file donde querramos usar esta info:
// IMPORT {RANDOM} FROM "./PATH"
//
export const random = 'Random Value';
export const people = [
  { name: 'Tom', job: 'Dev' },
  { name: 'Katy', job: 'Design' },
  { name: 'Rafa', job: 'Boss' },
];
//
// :::::::: IMPORTS in ES6Modules.js:::::::::
// import { random } from './Utils/data.js';
// Aqui veremos instantaneamente un ERROR! (cannot use an IMPORT statement outside a Module)
// Entonces vamos al HTML y dentro del <SCRIPT TYPE="MODULE">
// Luego agregar extension al PATH
// import { random } from './Utils/data.js';
// console.log(random);
//
//
// ::::::: DEFAULT EXPORT ::::::::::
//
// Pondremos una Function
