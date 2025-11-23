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

    getNotesCant = async (req, res) => {
        const cantNotes = await this.service.getNotesCant()
        res.send(cantNotes)
    }

    getNotesPorCurso = async (req, res) => {
        const cantNotesPorCurso = await this.service.getNotesPorCurso()
        res.send(cantNotesPorCurso)
        //res.json(JSON.parse(cantNotesPorCurso))
    }

    getNotesMedPorCurso = async (req, res) => {
        const medNotesPorCurso = await this.service.getNotesMedPorCurso()
        res.send(medNotesPorCurso)
        //res.json(JSON.parse(medNotesPorCurso))
    }

    getNotesById = async (req, res) => {
        const { identificador } = req.params
        const noteById = await this.service.getNotesById(identificador)
        res.send(noteById)
    }

    putNotes = async (req, res) => {
        const { id } = req.params
        const note = req.body
        const putNote = await this.service.putNotes(id, note)
        res.send(putNote)
    }

    patchNotes = async (req, res) => {
        const { id } = req.params
        const note = req.body
        const patchNote = await this.service.patchNotes(id, note)
        res.send(patchNote)
    }
      
    deleteNotes = async (req, res) => {
        // req.params tiene muchos parámetros  sólo necesito el id (desestructuring)
        const { id } = req.params
        const deleteNote = await this.service.deleteNotes(id)
        res.send(deleteNote)
    }
}

export default NotesController

