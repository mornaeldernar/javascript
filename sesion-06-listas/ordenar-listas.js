// .sort() -> MODIFICA EL ARRAY
const array = [2,5,9,15,1,2,0,4]

console.log(array)

array.sort((a,b)=>{
    if(a < b){
        return -1
    } else if(a > b){
        return 1
    }else { //a === b
        return 0
    }
})

console.log(array)

// Ordenar unicamente arrays numericos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]

arrayNumerico.sort((a,b) => b - a)

console.log(arrayNumerico)

// Interesante en array de objetos

const listaObjetos = [
    { nombre: "Leire", edad: 35},
    { nombre: "Gorka", edad: 34},
    { nombre: "Miguel", edad: 28},
    { nombre: "Julian", edad: 28},
    { nombre: "Lucia", edad: 3},
    { nombre: "Amaia", edad: 29}
]
listaObjetos.sort((a,b) => b.edad - a.edad)
console.table(listaObjetos)