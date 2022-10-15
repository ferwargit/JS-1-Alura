const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogotá');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');
ciudadesDisponibles.push('Santiago');

const edadComprador = 15;
const estaAcompanado = true;
const tienePasaje = true;
const ciudadDestino = 'Lima';
let destinoDisponible = false;
let posicion = 0;
let puedeComprar = false;
console.log(ciudadesDisponibles);

puedeComprar = (edadComprador >= 18 || estaAcompanado);

// while(posicion < ciudadesDisponibles.length) {
//     if(ciudadesDisponibles[posicion] == ciudadDestino) {
//         console.log(`Destino disponible`);
//     } else {
//         console.log(`Destino NO disponible`);
//     }
//     // posicion = posicion + 1;
//     posicion ++;
// }


// while(posicion < ciudadesDisponibles.length) {
//     if(ciudadesDisponibles[posicion] == ciudadDestino) {
//         destinoDisponible = true;
//         break;
//     }
//     posicion ++;
// }

// Bucle for
for(posicion = 0; posicion < ciudadesDisponibles.length; posicion++) {
    if(ciudadesDisponibles[posicion] == ciudadDestino) {
        destinoDisponible = true;
        break;
    } 
}

if (puedeComprar && destinoDisponible) {
    console.log(`Es posible vender el pasaje. La persona puede comprar y el destino esta diponible`);
} else if (puedeComprar) {
    console.log(`No es posible vender el pasaje. La persona puede comprar pero el destino no esta disponible`);
} else {
    console.log(`No es posible vender el pasaje`);
}

console.log(`Destino esta disponible: ${destinoDisponible}`);