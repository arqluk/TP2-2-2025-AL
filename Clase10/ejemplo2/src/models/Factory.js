import NotesMemModel from "./DAO/notes.model.mem.js"

class Factory {
    static get(persistence) {
        switch (persistence) {
            case "MEM":
                console.warn("Persistencia en memoria del servidor.")
                return new NotesMemModel();
            default:
                console.warn("Persistencia en default.")
                return new NotesMemModel();
        }
    }
}

export default Factory