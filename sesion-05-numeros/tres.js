// oerpador .valueof()
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a+b);
console.log(a.valueOf()+b.valueOf());

console.log(b.valueOf());

let str = new String("hola soy un string");

console.log(str);
console.log(str.valueOf())

//Nan - Inifinit
let n = Number('adios');
console.log(n)
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log( numerador / divisor );
let divisor_2 = null;
console.log( numerador / divisor_2 );

//Como convertir los stirng sa valores numeriocs con number, parse int, parsefloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero)
console.log(numero + num2); //Error de concepto

console.log(Number(numero) + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

//Numeros hexadecimales
let numHex = '0x3a5b7';
console.log(parseInt(numHex,8));

//Obtener los valores ma´ximo y minimo
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS)