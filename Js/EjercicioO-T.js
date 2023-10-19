// P) Dado un array de 5 elementos, desplazar todos los elementos del mismo a la derecha Ej:  let array = [1,2,3,4,5]   resultado esperado: [5,1,2,3,4]


// let array = [1, 2, 3, 4, 5]
// console.log(array)

// function operacion(array) {
//     if(array.length > 0) {
//         let ultimoIndice = array[array.length - 1]
//         for(let i = array.length -1; i > 0; i--) {
//             array[i] = array[i - 1]
//         }
//         array[0] = ultimoIndice
//     }
// }

// operacion(array)
// console.log(array)



// Q) Crear un conversor para convertir de pesos a dólares, el usuario deberá poder seleccionar si la conversión será a dólar blue u oficial.

// let dolarBlue = 905
// let dolarOficial = 368


// let conversor = +prompt (`Escoja como quiere convertir
// 1 - dolar blue
// 2 - dolar oficial`)
// switch(conversor) {
//     case 1:
//         let operacionB = +prompt("ingrese el monto en pesos a calcular en dolar blue")
//         let resultadoB = operacionB / dolarBlue
//         console.log(`la conversion de $${operacionB} pesos a dolar Blue es de $${resultadoB}`)
//         break;
//     case 2:
//         let operacionO = +prompt("ingrese el monto en pesos para convertir a dolar oficial")
//         let resultadoO = operacionO / dolarOficial
//         console.log(`la conversion de $${operacionO} pesos a dolar oficial es de $${resultadoO}`)
//         break;
//     default:
//         alert("Debe elegir 1 o 2")
// }



// R) Crear un conversor que solicite al usuario los grados farenheit y retorne grados celsius.

// function conversorTemp (gradosF) {
//     let gradosC = (gradosF - 32) / 1.8
//     return gradosC
// }
// let gradosFahrenheit = +prompt("ingrese la temperatura en ºF")
// let gradosCelsius = conversorTemp(gradosFahrenheit)
// console.log(`${gradosFahrenheit}ºF son aproximadamente ${gradosCelcius}ºC`)

// S) Convertir el valor de 100.000.000 de milisegundos en horas y minutos

// let milisegundos = 100000000
// let horas = Math.floor(milisegundos / 3600000)
// let minutos = Math.floor(horas * 60)
// console.log(`${milisegundos} tiene un total de ${horas} horas`)
// console.log(`${milisegundos} tiene un tota de ${minutos} minutos`)


// T) Solicitando al usuario los datos necesarios, obtener el perímetro de un cuadrado.

// function perimetro (lado) {
//     let ladosIguales = 4
//     return (lado * ladosIguales)
// }

// let cuadrado = +prompt("Ingrese el valor de un lado del cuadrado Metros")
// let perimetroCuadrado = perimetro(cuadrado)
// console.log(`un lado del cuadrado mide ${cuadrado} Metros`)
// console.log (`el perimetro total de el cuadrado es ${perimetroCuadrado} Metros`)
