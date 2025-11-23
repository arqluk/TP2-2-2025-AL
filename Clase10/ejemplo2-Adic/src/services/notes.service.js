import Factory from "../models/Factory.js"

class NotesService {
    constructor() {
        this.model = Factory.get("")
    }

    getNotes = async () => {
        const msg = await this.model.getNotes()
        return msg
    }

    postNotes = async (note) => {
        const newNote = await this.model.postNotes(note)
        return newNote
    }

    getAllNotes = async () => {
        const notes = await this.model.getAllNotes()
        return notes
    }

    getNotesMed = async () => {
        const noteMed = await this.model.getNotesMed()
        return noteMed
    }

    getNotesMin = async () => {
        const noteMin = await this.model.getNotesMin()
        return noteMin
    }

    getNotesMax = async () => {
        const noteMax = await this.model.getNotesMax()
        return noteMax
    }

    getNotesCant = async () => {
        const cantNotes = await this.model.getNotesCant()
        return cantNotes
    }

    getNotesPorCurso = async () => {
        const cantNotesPorCurso = await this.model.getNotesPorCurso()
        return cantNotesPorCurso
    }

    getNotesMedPorCurso = async () => {
        const medNotesPorCurso = await this.model.getNotesMedPorCurso()
        return medNotesPorCurso
    }

    getNotesById = async (identificador) => {
        const noteById = await this.model.getNotesById(identificador)
        return  noteById
    }

    putNotes = async (identificador, note) => {
        return this.model.putNotes(identificador, note)
    }

    patchNotes = async (identificador, note) => {
        return this.model.patchNotes(identificador, note)
    }

    deleteNotes = async (identificador) => {
        return this.model.deleteNotes(identificador)
    }
}

export default NotesService

