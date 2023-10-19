// K) Dado un string solicitado al usuario por consola, contar cuantas veces se repiten las vocales.

// let string = prompt("ingrese una palabra")
// console.log(string)
// let contadorA = 0
// let contadorE = 0
// let contadorI = 0
// let contadorO = 0
// let contadorU = 0
// for(let i = 0; i < string.length; i++) {
//     let contVocales = string[i]
//     switch(contVocales) {
//         case "a":
//             contadorA++;
//             break;
//         case "e":
//             contadorE++;
//             break;
//         case "i":
//             contadorI++;
//             break;
//         case "o":
//             contadorO++;
//             break;
//         case "u":
//             contadorU++;
//             break;
//     }
// }

// console.log(`la vocal A se repite ${contadorA} veces`)
// console.log(`la vocal E se repite ${contadorE} veces`)
// console.log(`la vocal I se repite ${contadorI} veces`)
// console.log(`la vocal O se repite ${contadorO} veces`)
// console.log(`la vocal U se repite ${contadorU} veces`)

// L) Dado un array de 10 elementos, devolver cuales elementos de dicho array son números primos.
 
// let array = [2, 5, 6, 3, 8, 13, 17, 20, 25, 27]
//  console.log(array)
//  function esPrimo(numero) {
//     if(numero <= 1) {
//         return false
//     }
//     for(let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             return false
//         }
//     }
//     return true 
//  }

//  for(let j = 0; j < array.length; j++) {
//     if (esPrimo(array[j])) {
//         console.log(`el ${array[j]} es un numero primo`)
//     }
//  }

// M) Imprimir la secuencia de fibonacci hasta el número 233 sin utilizar arrays.

// let a = 0;
// let b = 1;

// while (a <= 233) {
//   console.log(a);
//   let operacion = a;
//   a = b;
//   b = operacion + b;
// }

// N) Dados 2 arrays de 10 elementos cada uno, encontrar los elementos que sean iguales en ambos arrays y crear un tercer array con estos elementos.

// let array = [3, 26, 54, 74, 34, 62, 23, 52 ,64, 22]
// let segundoArray = [2, 23, 34, 66, 33, 52, 64, 76, 11, 99]
// let tercerArray = []
// let bandera = true
// console.log(array, segundoArray)
// for(let i = 0; i < array.length; i++) {
//     let index = array[i]
//     for(let j = 0; j < segundoArray.length; j++) {
//         if(array[i] === segundoArray[j]) {
//             tercerArray[tercerArray.length] = index
//             console.log(`el numero se repite ${index}`)
//             bandera = false
//         }
//     }
// }

// console.log(tercerArray)


// O) Dado un número de 3 o 4 dígitos, dividir este número en sus diferentes partes y crear un array con ellas. Ej:  let número = 324;   resultado esperado: [300, 20, 4];

let numero = 587
let resultado = []

let unidades = numero % 10
console.log(unidades)
let decenas = Math.floor((numero % 100) / 10) * 10
console.log(decenas)
let centenas = Math.floor((numero % 1000) / 100) * 100
console.log(centenas)


resultado.push(centenas)
resultado.push(decenas)
resultado.push(unidades)
console.log(resultado)
