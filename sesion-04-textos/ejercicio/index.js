const nombre = "Rafa"
const apellido = "JO"
const apellido_m = "O"
const estudiante = nombre.concat(" ").concat(apellido).concat(" ").concat(apellido_m)

const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()

const estudianteLength = estudiante.length

// Todas válidas
const inicialNombre = nombre.substring(0, 1)
// Todas válidas
const finalApellido = apellido.substring(apellido.length - 1, apellido.length)

// Todas válidas
const estudianteSinEspacios = estudiante.replace(" ", "")

const nombreEnEstudiante = estudiante.includes(nombre)