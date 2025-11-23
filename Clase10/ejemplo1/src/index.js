import express from "express"
import WordsRoutes from "./routes/words.route.js"

const app = express()
const PORT = 8080

// Middlewares que necesito para intercambiar datos ya sea url o body con mi api
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Declaramos provisoriamente un endpoint para probar el funcionamiento del servidor
// app.get("/", (req, res) => {
//     res.send("Servidor funcionado OK !")
// })

app.use("/", new WordsRoutes().start())

// Alternativa para probar el navegador -> carpeta public con un index.html
// app.use(express.static("public"))

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("error", (err) => console.error(err))