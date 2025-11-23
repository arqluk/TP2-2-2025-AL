import NumsService from "../services/nums.service.js"

class NumsController {
    constructor() {
        this.service = new NumsService()
    } 

    numsWelcome = async (req, res) => {
        const msg = await this.service.numsWelcome()
        res.send(msg)
    }

    postNums = async (req, res) => {
        const num = req.body
        const newNum = await this.service.postNums(num)
        res.send(newNum)
    }

    getAllNums = async (req, res) => {
        const nums = await this.service.getAllNums()
        res.send(nums)
    }

    getNumsProm = async (req, res) => {
        const promedioNums = await this.service.getNumsProm()
        res.send(promedioNums)
    }

    getNumsMinMax = async (req, res) => {
        const minMax = await this.service.getNumsMinMax()
        res.send(minMax)
    }

    getNumsCant = async (req, res) => {
        const cantNums = await this.service.getNumsCant()
        res.send(cantNums)
    }

    // Fuera de consigna ...
    getNumsById = async (req, res) => {
        const { identificador } = req.params
        const numById = await this.service.getNumsById(identificador)
        res.send(numById)
    }

    putNums = async (req, res) => {
        const { id } = req.params
        const num = req.body
        const putNum = await this.service.putNums(id, num)
        res.send(putNum)
    }

    patchNums = async (req, res) => {
        const { id } = req.params
        const num = req.body
        const patchNum = await this.service.patchNums(id, num)
        res.send(patchNum)
    }

    deleteNums = async (req, res) => {
        // req.params tiene muchos parámetros  sólo necesito el id (desestructuring)
        const { id } = req.params
        const deleteNum = await this.service.deleteNums(id)
        res.send(deleteNum)
    }

}

export default NumsController