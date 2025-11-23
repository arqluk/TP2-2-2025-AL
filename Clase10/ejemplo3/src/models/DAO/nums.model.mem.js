class NumsMemModel {
    constructor() {
        this.nums = [
            { id: 1, numero: 7 },
            { id: 2, numero: 23 },
            { id: 3, numero: 3 },
            { id: 4, numero: 0 },
            { id: 5, numero: 59 }
        ]
    }

    numsWelcome = async () => {
        return "Bienvenidos a Nums"
    }

    getAllNums = async () => {
        return await this.nums
    }

    postNums = async (num) => {
        num.id = this.nums[this.nums.length - 1].id + 1
        this.nums.push(num)
        return num
    }

    getNumsProm =  async () => {
        const { promedioNums } = this.calcularNums(this.nums)
        return `El promedio es: ${promedioNums.toFixed(2)}`
    }

    getNumsMinMax = async () => {
        const { minNum, maxNum } = this.calcularNums(this.nums)
             return { minNum, maxNum }
    }

    getNumsCant =  async () => {
    //    const { promedioNums } = this.calcularNums(this.nums)
        return `El cantidad de números ingresados es: ${this.nums.length}`
    }

    // Fuera de consigna ...
    getNumsById =  async (identificador) => {
        const numById =  this.nums.filter( (num) => num.id == identificador )
        return numById
    }

    putNums = async (identificador, num) => {
        //Lo que viene por parámetros siempre es un string!!!
        num.id = parseInt(identificador)
        //La comparación es solo de valor, no considera el tipo de dato!!!
        const index = this.nums.findIndex((n) => n.id == identificador)
        this.nums.splice(index, 1, num)
        return "Actualización exitosa."
    }

    patchNums = async (identificador, num) => {
        const index = this.nums.findIndex((n) => n.id == identificador)
    //Spread operator "..."
    const newNum = {...this.nums[index], ...num}
        this.nums.splice(index, 1, newNum)
        return "Actualización exitosa."
    }

    deleteNums = async (identificador) => {
        const index = this.nums.findIndex((num) => num.id == identificador)
        if(index == -1) throw new Error("El id del elemento no existe.")
            this.nums.splice(index, 1)
        return "El número fue borrado"
    }
 
    // Función que calcula la nota más baja, la más alta y el promedio
    calcularNums = (nums) => {
        let minNum = Infinity
        //let nombreMinNota = ""
        let maxNum = -Infinity
        //let nombreMaxNota = ""
        let sumatoriaNums = 0

        maxNum = this.nums.reduce((acumulador, actual) => {
            return actual.numero > acumulador ? actual.numero : acumulador
        }, -Infinity)

        // let idx1 = this.notes.findIndex((elem) => elem.nota == maxNota)
        // nombreMaxNota = this.notes[idx1].nombre

        minNum = this.nums.reduce((acumulador, actual) => {
            return actual.numero < acumulador ? actual.numero : acumulador
        }, Infinity)

        // let idx2 = this.notes.findIndex((elem) => elem.nota == minNota)
        //     nombreMinNota = this.notes[idx2].nombre

        sumatoriaNums = this.nums.reduce((acumulador, actual) => acumulador + actual.numero, 0)
        const promedioNums = sumatoriaNums / this.nums.length

        return {
            minNum,
            //nombreMinNota,
            maxNum,
            //nombreMaxNota,
            promedioNums
        }
    }

}

export default NumsMemModel
