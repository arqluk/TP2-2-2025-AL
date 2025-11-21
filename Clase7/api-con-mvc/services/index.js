import productsModel from "../models/index.js"

// const getAllProducts = () => {
//     return productsModel.getAllProducts()
// }

const getAllProducts =  async () => {
    //Fix: la función se ejecuta!
    return await productsModel.getAllProducts()
}

const getProductsById =  (identificador) => {
    //Fix: la función se ejecuta!
    return  productsModel.getProductsById(identificador)
}

export default {
    getAllProducts,
    getProductsById
}