// P) Dado un array de 5 elementos, desplazar todos los elementos del mismo a la derecha Ej:  let array = [1,2,3,4,5]   resultado esperado: [5,1,2,3,4]


let array = [1, 2, 3, 4, 5]
console.log(array)
for(let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1]

}