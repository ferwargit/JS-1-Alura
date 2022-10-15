const ciudadesDisponibles = new Array();

// ciudadesDisponibles.push('Bogotá');
// ciudadesDisponibles.push('Caracas');
// ciudadesDisponibles.push('Lima');
// console.log(ciudadesDisponibles);

// const edadComprador = 30;

// if(edadComprador >= 18) {
//     // Aquí se ejecuta el código si la edad del comprador es mayor a 18
//     console.log('El comprador es mayor de edad')
//     console.log('Ciudades disponibles para el viaje')
//     console.log(ciudadesDisponibles);
// } else {
//     console.log('El comprador NO es mayor de edad');
//     console.log('No es podible ofrecer viajes');
// }

// console.log("edadComprador:", edadComprador);
// console.log("edadComprador >= 18:", edadComprador >= 18);
// console.log("edadComprador > 18:", edadComprador > 18);
// console.log("edadComprador <= 18:", edadComprador <= 18);
// console.log("edadComprador < 18:", edadComprador < 18);
// console.log("edadComprador == 18:", edadComprador == 18);
// console.log("edadComprador != 18:", edadComprador != 18);

const edadComprador = 15;
const estaAcompanado = true;
const tienePasaje = true;

// if(edadComprador >= 18) {
//     // Aquí se ejecuta el código si la edad del comprador es mayor a 18
//     console.log('El comprador es mayor de edad')
//     console.log('Ciudades disponibles para el viaje')
//     console.log(ciudadesDisponibles);
// } else {
//     if(estaAcompanado) {
//         console.log('El comprador menor de edad está acompañado')
//         console.log('Ciudades disponibles para el viaje')
//         console.log(ciudadesDisponibles);
//     } else {
//         console.log('El comprador NO es mayor de edad y NO está acompañado');
//         console.log('No es podible ofrecer viajes');
//     }

// }

// Se puede escribir de la siguiente forma
// if (edadComprador >= 18) {
//   // Aquí se ejecuta el código si la edad del comprador es mayor a 18
//   console.log("El comprador es mayor de edad");
//   console.log("Ciudades disponibles para el viaje");
//   console.log(ciudadesDisponibles);
// } else if (estaAcompanado) {
//   console.log("El comprador menor de edad está acompañado");
//   console.log("Ciudades disponibles para el viaje");
//   console.log(ciudadesDisponibles);
// } else {
//   console.log("El comprador NO es mayor de edad y NO está acompañado");
//   console.log("No es podible ofrecer viajes");
// }


// Con operadores lógicos
if (edadComprador >= 18 || estaAcompanado) {
  // Aquí se ejecuta el código si la edad del comprador es mayor a 18
  console.log("Es posible vender pasajes");
  console.log("Ciudades disponibles para el viaje");
  console.log(ciudadesDisponibles);
} else {
  console.log("El comprador NO es mayor de edad y NO está acompañado");
  console.log("No es podible ofrecer viajes");
}

// Proceso de enbarque
console.log(`Proceso de embarque\n`)
if(tienePasaje && (edadComprador >= 18 || estaAcompanado)) {
  console.log(`Comprador con pasaje. Feliz viaje`);
} else {
  console.log(`Comprador sin pasaje. No es posible hacer el embarque`);
}