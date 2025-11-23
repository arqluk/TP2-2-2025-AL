class NotesMemModel {
    constructor() {
        this.notes = [
            { id: 1, nombre: "Juana Gimenez", nota: 10, curso: "21A" },
            { id: 2, nombre: "Pedro Lopez", nota: 8, curso: "21A" },
            { id: 3, nombre: "Jose Perez", nota: 9, curso: "21A" }
        ]
    }

    getNotes = async () => {
        return "Bienvenidos a Notes"
    }

    postNotes = async (note) => {
        note.id = this.notes[this.notes.length - 1].id + 1
        this.notes.push(note)
        return note
    }

    getAllNotes = async () => {
        return await this.notes
    }


    // -------------------------------------------------------------------------------------------

    // Resolución modularizando con calcularNotas() que implementa reduce()

    getNotesMed = async () => {
        const { promedioNotas } = this.calcularNotas(this.notes)
        return `El promedio de notas es: ${promedioNotas.toFixed(2)}`
    }

    getNotesMin = async () => {
        const { minNota } = this.calcularNotas(this.notes)
        const { nombreMinNota } = this.calcularNotas(this.notes)
            return `La nota mínima es: ${minNota.toFixed(2)} de ${nombreMinNota}`
        }

    getNotesMax = async () => {
        const { maxNota } = this.calcularNotas(this.notes)
        const { nombreMaxNota } = this.calcularNotas(this.notes)
            return `La nota máxima es: ${maxNota.toFixed(2)} de ${nombreMaxNota}`
        }

    // Función que calcula la nota más baja, la más alta y el promedio
    calcularNotas = (notes) => {
        let minNota = Infinity
        let nombreMinNota = ""
        let maxNota = -Infinity
        let nombreMaxNota = ""
        let sumatoriaNotas = 0

        maxNota = this.notes.reduce((acumulador, actual) => {
            return actual.nota > acumulador ? actual.nota : acumulador
        }, -Infinity)

        let idx1 = this.notes.findIndex((elem) => elem.nota == maxNota)
        nombreMaxNota = this.notes[idx1].nombre

        minNota = this.notes.reduce((acumulador, actual) => {
            return actual.nota < acumulador ? actual.nota : acumulador
        }, Infinity)

        let idx2 = this.notes.findIndex((elem) => elem.nota == minNota)
            nombreMinNota = this.notes[idx2].nombre

        sumatoriaNotas = this.notes.reduce((acumulador, actual) => acumulador + actual.nota, 0)
        const promedioNotas = sumatoriaNotas / this.notes.length

        return {
            minNota,
            nombreMinNota,
            maxNota,
            nombreMaxNota,
            promedioNotas
        }
    }
}

// -------------------------------------------------------------------------------------------

    export default NotesMemModel
