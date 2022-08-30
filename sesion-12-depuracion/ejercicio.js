const fibonacci = (num) => {
    let valores = [1]
    let anterior = 0
    let pasado = 1
    for(let i = 1; i < num; i++){
        siguiente = anterior + pasado
        valores = [...valores, siguiente]
        anterior = pasado
        pasado = siguiente
    }
    return valores
}

console.log(fibonacci(6))