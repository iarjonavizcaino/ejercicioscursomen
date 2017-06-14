var cadena = require("./cadena");

cadena.setCadena("Anita lava la tina");
var palindromo = cadena.palindromo();
var vocales = cadena.vocales();
var palabras = cadena.palabras();
var letras = cadena.letras();
var consonantes = cadena.consonantes();

console.log("Palíndromo "+palindromo?"Si es palindromo":"No es palindromo");
console.log("Palabras "+palabras);
console.log("Letras "+letras);
console.log("Vocales "+vocales);
console.log("Consonantes "+consonantes);