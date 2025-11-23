import fs from "fs"

class NumsFsModel {
    constructor() {
        this.nums = "nums.json"
    }

    numsWelcome = async () => {
        return "Bienvenidos a Nums"
    }

    getAllNums = async () => {
        return await fs.promises.readFile(this.nums, "utf-8")
    }

    postNums = async (num) => {
        // Leer el archivo nums.json
        let numsJs = await fs.promises.readFile(this.nums, "utf-8");

        // Convertir el string en un array de objetos
        numsJs = JSON.parse(numsJs);

        // Asignar un nuevo id al número
        num.id = numsJs[numsJs.length - 1].id + 1;

        // Agregar el nuevo número al array
        numsJs.push(num);

        // Escribir el array actualizado de vuelta al archivo nums.json
        await fs.promises.writeFile(this.nums, JSON.stringify(numsJs, null, 2))

        return num;
    }

    getNumsProm = async () => {
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        const { promedioNums } = this.calcularNums(numsJs)
        return `El promedio es: ${promedioNums.toFixed(2)}`
    }

    getNumsMinMax = async () => {
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        const { minNum, maxNum } = this.calcularNums(numsJs)
        return { minNum, maxNum }
    }

    getNumsCant = async () => {
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        return `El cantidad de números ingresados es: ${numsJs.length}`
    }

    // Fuera de consigna ...
    getNumsById =  async (identificador) => {
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        const numById =  numsJs.filter( (num) => num.id == identificador )
        return numById
    }

    putNums = async (identificador, num) => {
        //Lo que viene por parámetros siempre es un string!!!
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        num.id = parseInt(identificador)
        //La comparación es solo de valor, no considera el tipo de dato!!!
        const index = numsJs.findIndex((n) => n.id == identificador)
        numsJs.splice(index, 1, num)
        await fs.promises.writeFile(this.nums, JSON.stringify(numsJs, null, 2))
        return "Actualización exitosa."
    }

    patchNums = async (identificador, num) => {
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        const index = numsJs.findIndex((n) => n.id == identificador)
    //Spread operator "..."
    const newNum = {...numsJs[index], ...num}
    numsJs.splice(index, 1, newNum)
        await fs.promises.writeFile(this.nums, JSON.stringify(numsJs, null, 2))
        return "Actualización exitosa."
    }

    deleteNums = async (identificador) => {
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        const index = numsJs.findIndex((num) => num.id == identificador)
        if(index == -1) throw new Error("El id del elemento no existe.")
            numsJs.splice(index, 1)
        await fs.promises.writeFile(this.nums, JSON.stringify(numsJs, null, 2))
        return "El número fue borrado"
    }

    // Función que calcula la nota más baja, la más alta y el promedio
    calcularNums = (nums) => {
        let minNum = Infinity
        let maxNum = -Infinity
        let sumatoriaNums = 0

        maxNum = nums.reduce((acumulador, actual) => {
            return actual.numero > acumulador ? actual.numero : acumulador
        }, -Infinity)

        minNum = nums.reduce((acumulador, actual) => {
            return actual.numero < acumulador ? actual.numero : acumulador
        }, Infinity)

        sumatoriaNums = nums.reduce((acumulador, actual) => acumulador + actual.numero, 0)
        const promedioNums = sumatoriaNums / this.nums.length

        return {
            minNum,
            maxNum,
            promedioNums
        }
    }

}

export default NumsFsModel