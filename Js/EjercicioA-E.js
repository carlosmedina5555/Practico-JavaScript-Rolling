// A)  Solicitar al usuario por pantalla ingresar un mínimo de 5 elementos. Una vez que el usuario desee finalizar, realizar la sumatoria de todos los elementos del array.

// let array = []
// let contador = 0
// let operacion = 0
// while(true) {
//     let valor = prompt("Ingrese numero a sumar (si desea terminar la operacion oprima 'F')")
//     if(valor.toUpperCase() === "F"){
//         if (contador < 5) {
//             alert("debe ingresar al menos 5 valores para la operacion")
//         } else{
//             break;
//         }
//     }else {
//         let numero = +valor
//         if (!isNaN(numero)) {
//             array.push(numero)
//             console.log(numero)
//             contador++
//         } else {
//             alert("Por favor ingrese un valor numerico!")
//         }
//     }
// }


// if(array.length > 0){
//     for (let suma = 0; suma < array.length; suma++) {
//         operacion += array[suma]
//     }
//     alert(`la suma de mi operacion es ${operacion}`)
//     console.log(operacion)
// }else { 
//     alert("la operacion no cumple con los requisitos")}









// B)  Solicitar al usuario ingresar por pantalla una lista de calificaciones de sus alumnos, luego devolver el promedio de dichas calificaciones. 


// let notaPromedio = []
// let contador = 0
// let sumaNotas = 0
// while(contador < 3) {
//     let nota = prompt("ingrese las nota trimestral")
//     console.log(nota)
//     notaPromedio.push(+nota)
//     contador++
// }
// if(notaPromedio.length > 0) {
//     for (let c = 0; c < notaPromedio.length; c++) {
//         sumaNotas += notaPromedio[c]
//         console.log(sumaNotas)
//     }
// }
//  let notaFinal = sumaNotas/notaPromedio.length
//  console.log(notaFinal)
//  alert(`su nota final es de ${notaFinal}`)





// C) En un concurso de pesca al que se  presentaron por lo menos 100 personas, los primeros 3 lugares son para los peces más pesados. Solicitar al usuario ingresar un mínimo de 5 valores representando el peso de los peces y retornar el pez de mayor peso así como también el segundo y tercer pez de mayor peso.










// D)Dado un array de 10 elementos, recorrer el mismo e imprimir en consola si es PAR o IMPAR SIN UTILIZAR EL MÓDULO %


// let elementos = []
// for(index = 0; index < 10; index ++) {
//     let valores = +prompt("Ingrese sus valores")
//     elementos[elementos.length] = valores
//     if((valores/2) === (valores/2 | 0)) {
//     console.log(`${valores} es par`)
//     }else {
//         console.log(`${valores} es impar`)
//     }
// }
//    console.log(elementos)








// E) Realizar la potencia de un número sin utilizar el Objeto y método Math.pow()

// let base = +prompt("Ingrese la base de su pontencia")
// console.log(base)
// let exponente = +prompt("ingrese el exponente de su base")
// console.log(exponente)
// let resultado = 1
// for(index = 0; index < exponente; index++) {
//     resultado *= base
// }
// console.log(resultado)


