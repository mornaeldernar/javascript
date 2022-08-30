let listaCompra = ["Huevo", "leche","crema","jamon","tomate"]

listaCompra.push("Aceite de Girasol")

console.log(listaCompra)
listaCompra.pop();
console.log(listaCompra)

const peliculas = [
    {
        titulo: "Rogue One: una historia de Star Wars",
        director: "Gareth Edwards",
        fecha: new Date(2016,12,15)
    },
    {
        titulo: "Kill Bill",
        director: "Quentin Tarantino",
        fecha: new Date(2003,01,01)
    },
    {
        titulo: "Kung Fu Panda",
        director: "Mark Osborne",
        fecha: new Date(2008,06,06)
    },
]

const peliculas2010 = peliculas.filter((obj) => obj.fecha.getFullYear() > 2010 );
console.log(peliculas2010)

const directores = peliculas.map((obj,indx) => obj.director);
console.log(directores);

const titulos = peliculas.map((obj,indx) => obj.titulo);
console.log(titulos);

const director_pelicula= directores.concat(titulos);
console.log(director_pelicula);


const director_pelicula_fp = [...directores,...titulos]
console.log(director_pelicula_fp);
