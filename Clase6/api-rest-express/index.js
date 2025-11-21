import express from "express"

console.log("")
console.log("-------------------------------------------------------------")
console.log("-------------------------------------------------------------")
console.log("Esto es api-rest-express")
console.log("")

// // Framework: entorno de trabajo, contiene herramientas, middlewares, métodos, etc
// // Librería: solución a un problemo concreto

// // Express es un framework para node.js, nos provee herramientas, enrutamiento, middlewares

const app = express()
const PORT = 8080


// Middlewares de Express (funciones que están en medio de la solicitud y la respuesta)

// Utilizar el req.params
app.use(express.urlencoded({extended: true}))

// Utilizar el req.body
app.use(express.json())

// Opcional añadir el middleware para llamar a la carpeta public o no
// si está el middleware de public, se pisa la ruta base "localhost:8080/" ...

// app.use(express.static("public"))

const products = [
    {nombre: "Celular Xiaomi", categoria: "Smartphones", precio: "989000"},
    {nombre: "Mouse", categoria: "Inalambrico", precio: "150000"},
    {nombre: "Teclado", categoria: "Inalambrico", precio: "80000"}
]

//Endpoints -> puntos de acceso a nuestro servidor
app.get("/", (req, res) => {
    //si comentamos el middleware de express que llama a la carpeta public, se puede ver esta respuesta
    res.send("Bienvenido")
})

// app.get("/products", (req, res) => {
//     console.log("REQ: ", req.method)
//     res.send("Lista de productos")
// })

app.get("/products", (req, res) => {
    res.send(products)
})

// Invocación del servidor al final
app.listen(PORT, () => {
    console.log("Servidor running en http://localhost:8080")
    
})

app.on("Error", (error) => {
    console.log("Ha ocurrido un error con el servidor. ", error)
})