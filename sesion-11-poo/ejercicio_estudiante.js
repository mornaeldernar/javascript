class Estudiante {
    _nombre
    _asignaturas = ["Javascript", "HTML", "CSS"]
    constructor(nombre){
        this._nombre = nombre
    }

    obtenDato(){
        return {
            nombre:this._nombre,
            asignaturas: this._asignaturas

        }
    }
}

const estudiante1 = new Estudiante("Juan")

console.log(estudiante1.obtenDato())