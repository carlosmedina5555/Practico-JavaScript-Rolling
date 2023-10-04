// F) Dado un array de 5 elementos, multiplicar todos los elementos de dicho array por un número seleccionado por el usuario.


// let elementos = []
// let contador = 0
// while(contador < 5) {
//     let numero = +prompt("Ingrese sus numeros a multiplicar")
//     elementos[elementos.length] = numero
//     contador++

// }
// console.log(elementos)
// let operacion = +prompt("Ingrese el valor para multiplicar")
// for(index = 0; index < elementos.length; index++) {
//     let multiplo = elementos[index]
//     multiplo = elementos[index] * operacion
//     console.log(multiplo)
// }





// G) Dado un array de 10 elementos, solicitar al usuario ingresar un valor a buscar dentro del array e indicar si dicho valor se encuentra o no dentro del array. SIN UTILIZAR EL FILTER O CUALQUIER MÉTODO DE FILTRADO


// let array = [34, 65, 23, 63 , 84, 11 ,33, 22, 1, 5]
// console.log(array)
// let bandera = false
// let valor = +prompt("ingrese en valor que quiere buscar en el array")
// for(index = 0; index < array.length; index++) {
//     if(array[index] === valor) {
//         console.log(`el ${valor} ingresado no se encuentra en el array`)
//     } else {
//         console.log(`el ${valor} se encuentra en el array`)
//         bandera = true
//         break;
//     }
// }


// H) Dado un array de 5 elementos dados por el usuario, ordenar sus valores de forma ascendente y descendente SIN UTILIZAR EL SORT

// let array = []
// let contador = 0
// while(contador < 5) {
//     let elementos = +prompt("ingrese un valor numerico")
//     array[array.length] = elementos
//     contador++
// }
// console.log(array)
// for(index = 0; index < array.length; index++) {
//     for(i = 0; i < array.length -1; i++) {
//         if(array[i]> array[i+1]) {
//             let operacion = array[i]
//             array[i] = array[i+1]
//             array[i+1] = operacion
//         }
//     }
// }
// console.log(`el array ordenado de forma ascendente es ${array}`)

// for(index = 0; index < array.length; index++) {
//     for(i = 0; i < array.length -1; i++) {
//         if(array[i] < array[i+1]) {
//             let operacion = array[i]
//             array[i] = array[i+1]
//             array[i+1] = operacion
//         }
//     }
// }

// console.log(`el array ordenado de forma descendiente es ${array}`)


