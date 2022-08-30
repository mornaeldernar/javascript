// Formas de importar y exportar modulos
// 1 CommonJS - require
// 2 Import ES6 - import

// const moduloMatematicas = require("./modulos/matematicas")
// const factorial = moduloMatematicas.factorial

// const { factorial, suma } = moduloMatematicas

const {factorial,suma} = require("./modulos/matematicas")

const fact = factorial(5)
console.log(fact)

const sum = suma(12,90)
console.log(sum)