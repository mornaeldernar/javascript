//Como trabajr con listas(arrays, arrelgos, vectores)
let var1 = 45;
let array = [1, "hola", false, {id: 5}, null, undefined, var1];

console.log(array);

//Acceder a los valores de un array a traves de su posicion
// array[indice] => 0, 1 , 2 ,....
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// Metodos para introducir nuevos valores en nuestors arrays
// .push() .unshift() => mutan el valor de nuestro array

// para poner valores al final -> Push
array.push("final",45, 100, false);
console.log(array);

// valores al principio -> unshift
array.unshift("inicio", 87, 99);
console.log(array);

// Metodos para eliminar valores en nuestros arrays
// .pop() .shift() => mutan el valor del array

const array2 = [1,3, "hola", false]
//Valores al fina - Pop
array2.pop()
console.log(array2)

// valores al principio -> shift
array2.shift()
console.log(array2)

// Metods para eliminar, modificar o añadir valores en nuestro array
// .splice(x,y,z) Tantos valores como especifiquemos en y a partir del indice x

const array3 = [ 1,2,3,4,5,6];

// Eliminar valores .splice(inice, numValoresAEliminar)
array3.splice(2,1);
console.log(array3);

// Añadir valores .splce(indice, 0, valores)
array3.splice(2,0,"hola");
console.log(array3)

// modificar valores .splce(indice, 1, valores)
array3.splice(2,1,3)
console.log(array3)