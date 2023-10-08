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


// I) Dado un array de n elementos (debe ser mayor a 10 elementos pero los puede seleccionar ustedes). Contar cuantas veces se repiten los números.


// let array = [4, 3, 8, 3, 2, 1, 5, 8, 4, 0, 4];

// console.log(array);

// for (let i = 0; i < array.length; i++) {
//     let contador = 0;
//     for (let j = 0; j < array.length; j++) {
//         if (array[i] === array[j]) {
//             contador++;
//         }
//     }
//     console.log(`${array[i]} se repite ${contador} veces`)
// }


// J) Dado un array de strings, devolver la palabra más larga (la que posea mayor cantidad de letras) SIN UTILIZAR LA PROPIEDAD  .LENGTH


// let array = ["carlos", "perro", "gato", "comida", "televisor"]

// function palabraMasLarga(palabras) {
//     if(palabras === undefined || palabras[0] === undefined) {
//         return null
//     }
//     let palabraMasLarga = palabras[0]
//     let maximo = 0
//     for (let i = 0; palabras[0][i] !== undefined; i++) {
//         maximo = i
//         }
//     for(let j = 1; palabras[j] !== undefined; j++) {
//         let longitud = 0
//         while(palabras[j][longitud] !== undefined) {
//             longitud++
//         }
//         if (longitud > maximo) {
//             maximo = longitud
//             palabraMasLarga = palabras[j]
//         }
//     }
//     return palabraMasLarga
//     }
    
// let palabraMayor = palabraMasLarga(array)
// console.log(`La palabra mas larga es: "${palabraMayor}"`)




