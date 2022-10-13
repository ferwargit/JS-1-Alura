console.log(`Trabajando con listas`);

const Bogota = "Bogotá";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires = "BuenosAires";

console.log(Bogota, Lima, Santiago, BuenosAires);

// Una forma de definir el array
const ciudadesDisponibles = new Array();
// const ciudadesDisponibles = ['Bogota', 'Lima', 'Santiago', 'Buenos Aires'];

// push: Para insertar elementos en el array
ciudadesDisponibles.push('Bogotá');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');

console.log(ciudadesDisponibles);

const ciudadesMasVendidas = [];

console.log(ciudadesMasVendidas);

ciudadesMasVendidas.push('San Pablo');
ciudadesMasVendidas.push('Buenos Aires');

console.log(ciudadesMasVendidas);

console.log(ciudadesDisponibles[0]);
console.log(ciudadesDisponibles[2]);


const cantidadCiudades = ciudadesDisponibles.length;
console.log(`Tenemos ${cantidadCiudades} ciudades disponibles`);

// splice: eliminar elementos del array
// 1ro: nos pide la posicion inicial desde donde queremos eleiminar
// 2do: cuantos elementos queremos eliminar, si no lo ponemos se 
// eliminan todos desde ahi en adelante

ciudadesDisponibles.splice(1,1);
console.log(ciudadesDisponibles);