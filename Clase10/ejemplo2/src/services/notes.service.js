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
}

export default NotesService