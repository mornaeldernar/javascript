const datosPersonales ={
    nobre:"Rafael",
    apellido:"Jimenez",
    edad:38,
    altura:183,
    eresDesarrollador: true
}

let edad  = datosPersonales.edad;

const amigos = [ datosPersonales, 
    {
    nobre:"Alfredo",
    apellido:"Gomez",
    edad:35,
    altura:178,
    eresDesarrollador: false},
    {
    nobre:"Angelica",
    apellido:"Rivera",
    edad:42,
    altura:152,
    eresDesarrollador: false
    }   
]
console.log(amigos)

var listaNueva = [...amigos].sort((a,b) => a.edad-b.edad)
console.log(listaNueva)