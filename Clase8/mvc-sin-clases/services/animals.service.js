import animalsModel from  "../models/animals.model.js";

const getAllAnimals = async () => {
    return animalsModel.getAllAnimals()
}

const postAnimals = async (animal) => {
    return animalsModel.postAnimals(animal)
}

const putAnimals = async (identificador, animal) => {
    return animalsModel.putAnimals(identificador, animal)
}

const patchAnimals = async (identificador, animal) => {
    return animalsModel.patchAnimals(identificador, animal)
}

const deleteAnimals = async (identificador) => {
    return animalsModel.deleteAnimals(identificador)
}

export default {
    getAllAnimals,
    postAnimals,
    deleteAnimals,
    putAnimals,
    patchAnimals
}

// --------------------------------------------------------------------


// Desestructuring object para importar todos los métodos
// Otra forma de importar
// const { getAllAnimals, postAnimals, putAnimals, patchAnimals, deleteAnimals } = animalsModel

// const getAllAnimalsHandler = async () => {
//     return getAllAnimals()
// }

// const postAnimalsHandler = async (animal) => {
//     return postAnimals(animal)
// }

// const putAnimalsHandler = async (identificador, animal) => {
//     return putAnimals(identificador, animal)
// }

// const patchAnimalsHandler = async (identificador, animal) => {
//     return patchAnimals(identificador, animal)
// }

// const deleteAnimalsHandler = async (identificador) => {
//     return deleteAnimals(identificador)
// }

// export default {
//     getAllAnimalsHandler,
//     postAnimalsHandler,
//     deleteAnimalsHandler,
//     putAnimalsHandler,
//     patchAnimalsHandler
// }