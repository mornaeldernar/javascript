let hoy = new Date()
hoy
let cumple = new Date(1983,11,13)
let mayor = hoy.getTime() > cumple.getTime()
console.log(mayor)
let mes = cumple.getMonth()+1
let anio = cumple.getFullYear()
