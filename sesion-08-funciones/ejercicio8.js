function sinParametrosTrue(){
    return true;
}

function fun(){
    
    console.log("Hola soy una promesa")
}
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(resolve,5000)
})

miPromesa.then(fun)

function* generarId(){
    let id = 0;
    while(true){
        id = id+2;
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