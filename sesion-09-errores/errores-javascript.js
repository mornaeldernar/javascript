const miFuncion  = val => {
    if(typeof val === "number"){
        return 2* val
    }
    //return false
    throw new Error("El valor debe ser numerico")
}


// const elDoble = console.log(miFuncion("a1a"))

try{
    const elDoble = miFuncion(2)
    console.log("Esta ejecutansos correcto")
    console.log(elDoble)
} catch(e) {
    console.log("Error")
} finally {
    console.log("Esto se ejecuta siempre")
}