import Factory from "../models/Factory.js"

class NumsService {
    constructor() {
        this.model = Factory.get("")
    } 

    numsWelcome = async () => {
        const msg = await this.model.numsWelcome()
        return msg
    }

    postNums = async (num) => {
        const newNum = await this.model.postNums(num)
        return newNum
    }

    getAllNums =  async () => {
        const nums = await this.model.getAllNums()
        return nums
    }

    getNumsProm = async () => {
        const promedioNums = await this.model.getNumsProm()
        return promedioNums
    }

    getNumsMinMax = async () => {
        const minMax = await this.model.getNumsMinMax()
        return minMax
    }

    getNumsCant = async () => {
        const cantNums = await this.model.getNumsCant()
        return cantNums
    }

    // Fuera de consigna ...
    getNumsById = async (identificador) => {
        const numById = await this.model.getNumsById(identificador)
        return  numById
    }

    putNums = async (identificador, num) => {
        return this.model.putNums(identificador, num)
    }

    patchNums = async (identificador, num) => {
        return this.model.patchNums(identificador, num)
    }

    deleteNums = async (identificador) => {
        return this.model.deleteNums(identificador)
    }

}

export default NumsService