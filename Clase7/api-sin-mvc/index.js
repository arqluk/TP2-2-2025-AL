
import express from "express"

console.log("")
console.log("-------------------------------------------------------------")
console.log("-------------------------------------------------------------")
console.log("")
console.log("Esto es api-sin-mvc")
console.log("")

const app = express()
const PORT = 8080

//Middlewares:
//funciones que están entre la solicitud y el objeto de respuesta

//REQ PARAMS -> encargado de recibir parámetros por url
app.use(express.urlencoded({extended: true}))

//REQ BODY - recibe el cuerpo de la solicitud
app.use(express.json())

const products = [
    {id: 1, nombre: "Celular Xiaomi", categoria: "Smartphones", precio: "989000"},
    {id: 2, nombre: "Mouse", categoria: "Inalambrico", precio: "150000"},
    {id: 3, nombre: "Teclado", categoria: "Inalambrico", precio: "80000"}
]

app.get("/", (request, response) => {
    response.send("Bienvenido")
})

//Verbos/Tipos de solicitudes HTTP:
//GET (obtener), POST(añadir), PUT(cambiar todo), PATCH(cambia una parte), DELETE(borrar)
app.get("/products", (request, response) => {
    response.send(products)
})

// Probamos validar con .length > 0
app.get("/products/:identificador", (request, response) => {
    const { identificador } = request.params
    console.log("ID: ", identificador)
    const filteredProduct = products.filter( (product) => product.id == identificador )
    console.log("LONGITUD DEL ARRAY", filteredProduct.length)
    if(!filteredProduct.length > 0){
        console.log("Error -> estamos dentro del if: array vacío")
        response.send({code: 404, message: "El id no existe."})
    } else {
        console.log("Éxito -> estamos dentro del else: array no vacío")
        response.send(filteredProduct)
    } 
})

// Si en la aplicación el id no es autogenerado
// Por si el producto llega sin el id y hay que generarlo manualmente
app.post("/products", (request, response) => {
    const data = request.body
    //products[products.length -1] -> esto solo accede a la posición en el array
    data.id = products[products.length - 1].id + 1
    products.push(data)
    // //siempre enviar una respuesta!!!
    response.send(data) 
})

// Con la validación de indice === -1
app.delete("/products/:identificador", (request, response) => {
    const { identificador } = request.params
    // idx es el índice del elemento en el array
    const idx = products.findIndex( (product) => product.id == identificador)
    if(idx === -1){
        response.send("El producto no existe.")
    }else{
        products.splice(idx, 1)
        response.send("El producto fue elimiado.")
    }
})


app.listen(PORT, () => {
    console.log("Servidor running en http://localhost:8080")
})

app.on("Error", (error) => {
    console.log("Ha ocurrido un error con el servidor", error)
})