import NotesService from "../services/notes.service.js"

class NotesController {
    constructor() {
        this.service = new NotesService()
    }

    getNotes = async (req, res) => {
        const msg = await this.service.getNotes()
        res.send(msg)
    }
    
    postNotes = async (req, res) => {
        const note = req.body
        const newNote = await this.service.postNotes(note)
        res.send(newNote)
    }

    getAllNotes = async (req, res) => {
        const notes = await this.service.getAllNotes()
        res.send(notes)
    }

    getNotesMed = async (req, res) => {
        const promedioNotas = await this.service.getNotesMed()
        res.send(promedioNotas)
    }

    getNotesMin = async (req, res) => {
        const minNota = await this.service.getNotesMin()
        res.send(minNota)
    }

    getNotesMax = async (req, res) => {
        const maxNota = await this.service.getNotesMax()
        res.send(maxNota)
    }
}

export default NotesController