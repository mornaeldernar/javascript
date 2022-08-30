// localStorage.setItem("nombre","Gorka")
// localStorage.setItem("nombre","Rafa")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona",JSON.stringify({nombre:"gorka",edad:32}))

// console.log(JSON.parse(localStorage.getItem("persona")))

// JsON.stringify -> convierte un objeto en string
// JSON.parse -< convierte un objeto convertido a traves de stringify en un objeto javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion","Rafa")

/** Cookie */
document.cookie  ="nombreCookie=RafaCookie"

document.cookie = "nombreCaducidad=Nombre;expires="+new Date(2023,0,1).toUTCString()
console.log(document.cookie)