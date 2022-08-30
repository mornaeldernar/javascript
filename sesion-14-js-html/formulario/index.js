const f = document.getElementById("formulario");

console.log(f)

f.addEventListener("submit", evento => {
    alert("hola")
    evento.preventDefault();
})