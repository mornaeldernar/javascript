class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo() {
        console.log('Hola');
    }
}

const nueva_persona = new Persona("Juan", 39, true);
console.log(nueva_persona);
nueva_persona.saludo();

let numero  = 60; // inicializar
console.log(typeof numero)

let persona_2 = new Persona("Pablo",15,false); // instanciar
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)