// No cambia en el transcurso del programa, mantiene el mismo valor
console.log('Operaciones Aritmeticas');
const variableTexto = 'variableTexto';
console.log(variableTexto);

// variableTexto = 'nuevoValor';

// let: Solo queda disponible en ese bloque
let nuevaVariableTexto = "Valor que cambia";
console.log(nuevaVariableTexto);
nuevaVariableTexto = "Por otro valor";
console.log(nuevaVariableTexto);

// var: queda disponible en todo el programa
var variableGlobal = "Variable de todo el programa";
console.log(variableGlobal);
variableGlobal = "Otro valor global";
console.log(variableGlobal);

const unNumero = 10;
const numeroDecimal = 20.5;

let sumaNumeros = 0;
console.log(sumaNumeros);
sumaNumeros = 2 + 10 * 5;
console.log(sumaNumeros);
sumaNumeros = (2 + 10) * 5;
console.log(sumaNumeros);

// Concatenacion de strings
const nombreMadre = "María";
console.log('El nombre de mi madre es: ' + nombreMadre);