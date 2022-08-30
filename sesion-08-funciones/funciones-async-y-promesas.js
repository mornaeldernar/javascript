// Funciones asíncronas

function miAsync(){ 
    // Hace una llamada a una base de datos externas
    // puede darnos algun error
}
// Promesa Pueden o no ejecutarse de forma correcta
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si esta todo correcto
    if(i !== 0){
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(()=> console.log("se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

// async await