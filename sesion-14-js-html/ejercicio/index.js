const boton = document.getElementById("boton_alerta")

boton.addEventListener("click", () => {
    alert("Click en el botón")
})

$("#boton_alerta").click(() => {
    alert("Hola, estoy utilizando jQuery")
})