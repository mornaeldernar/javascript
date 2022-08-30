let a = 3.5;
let b = 4.8;

//Suma
console.log(a + b);
//Resta
console.log(a - b);
//multiplicacion
console.log(a * b);
//division
console.log(a / b);

//representacion de los nueros en cadenas de texto
console.log( typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

//Redonde de numeros decimales
let c = 3.3
let d = c * 3;

console.log(d);
console.log(typeof d);
//toFixed(x) - limitar el numero de decimales al valor de x
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1839.1232456789
let f = 21341324123412;
console.log(e.toFixed(5));
console.log(f.toFixed(2));

//toPresicion - limita el numero de cifras significativas
console.log(e.toPrecision(5))
console.log(f.toPrecision(7));

console.log(typeof e.toPrecision(5));