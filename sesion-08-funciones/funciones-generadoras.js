// Funcion generadora
function* generarId(){
    let id = 0;
    while(true){
        id++
        if(id === 10) {
            return id
        }
        yield id // Es como un return pero se queda esperando ahsta que se vuelva a llamar la funcion
    }
}

const gen = generarId()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)