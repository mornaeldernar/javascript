const persona = {
    nombre: "Rafa",
    edad: 34,
    idDeveloper: true,
    saludo : function(){
        console.log('hello')
    }
}
// console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo : function() {
        console.log('hello')
    }
}

otra_persona.saludo()

const nuevaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log('Hello')
        }
    }
}

const persona1 = nuevaPersona("juan",33,true)
console.log(persona1)