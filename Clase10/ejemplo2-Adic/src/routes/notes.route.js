import NotesController from "../controllers/notes.controller.js"
import express from "express"

class NotesRoutes {
    constructor() {
        this.router = express.Router()
        this.controller = new NotesController()
    }

    start() {
        this.router.get("/", this.controller.getNotes)
        this.router.post("/notes", this.controller.postNotes)
        this.router.get("/notes", this.controller.getAllNotes)
        this.router.get("/notes/med", this.controller.getNotesMed)
        this.router.get("/notes/min", this.controller.getNotesMin)
        this.router.get("/notes/max", this.controller.getNotesMax)
        this.router.get("/notes/cantidad", this.controller.getNotesCant)
        this.router.get("/notes/cantidadPorCurso", this.controller.getNotesPorCurso)
        this.router.get("/notes/medPorCurso", this.controller.getNotesMedPorCurso)
        this.router.get("/notes/:identificador", this.controller.getNotesById)
        this.router.put("/notes/update/all/:id", this.controller.putNotes)
        this.router.patch("/notes/update/:id", this.controller.patchNotes)
        this.router.delete("/notes/delete/:id", this.controller.deleteNotes)
        return this.router
    }
}

export default NotesRoutes

