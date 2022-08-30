class Persona {
    // Private  -> #
    // Solo se pueden obtener desde dentro de la clase
    #nombre;
    #edad;

    // Protected -> _
    // Solo se puede acceder desde dentro de la clase, y clases descendientes
    _isDeveloper = true;

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años.`);
    }
    obtenNombre(){ // Funcion Getter -> Nos permite acceder (de forma controlada) a algun atributo
        return this.#nombre;
    }

    #obtenEdad(){
        return this.#edad;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(edad){
        this.#edad = edad;
    }
}

const persona = new Persona("Rafa", 70)
console.log(persona)
console.log(persona.nombre)
persona.saludo()
console.log(persona.obtenNombre())
// console.log(persona.obtenEdad())
console.log(persona._isDeveloper)

// Getter -> metodos que nos permiten obtener atributos/valores privados o protegidos
const edad = persona.getEdad();
edad
// Setter -> metodos que nos permiten cambiar atributos/valores privados o protegidos
persona.setEdad(40);
console.log(persona.getEdad())