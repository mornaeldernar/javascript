const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const eliminar = document.querySelectorAll(".eliminar")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("estoy arrastrando el parrafo " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id",parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)

    })
    
    parrafo.addEventListener("dragend", () => {
        console.log("he terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover",event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // Copy por defecto
        // console.log("Drag Over")
    })

    seccion.addEventListener("drop",event => {
        console.log("drop")
        const idParrafo = event.dataTransfer.getData("id")
        console.log("Parrafo id: " + idParrafo)
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
    })
})

eliminar.forEach(eliminar => {
    eliminar.addEventListener("dragover",event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" // Copy por defecto
        // console.log("Drag Over")
    })

    eliminar.addEventListener("drop",event => {
        console.log("drop")
        const idParrafo = event.dataTransfer.getData("id")
        console.log("Parrafo id: " + idParrafo)
        const parrafo = document.getElementById(idParrafo)
        eliminar.appendChild(parrafo)
        eliminar.removeChild(parrafo)
    })
})