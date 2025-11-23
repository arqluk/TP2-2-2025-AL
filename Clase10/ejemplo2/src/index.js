import express from "express"
import NotesRoutes from "./routes/notes.route.js"

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Servidor funcionando ok!")
// })

app.use("/", new NotesRoutes().start())

app.listen( PORT, () => console.log(`Server running on: http://localhost:${PORT}`) )
app.on( "Error", (err) => { console.log("Ha ocurrido un error en el servidor: ", err) } )