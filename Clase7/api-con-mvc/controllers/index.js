import productsServices from "../services/index.js"

//El controlador TIENE que llamar al objeto de requerimiento y respuesta!

// const getAllProducts = () => {
//     //Fix: la función se ejecuta!
//     return productsServices.getAllProducts()
// }

// const getAllProducts = async () => {
//     //Fix: la función se ejecuta!
//     return await productsServices.getAllProducts()
// }

const getAllProducts =  async (req, res) => {
    //Fix: la función se ejecuta!
    const data = await productsServices.getAllProducts()
    res.send(data) 
}

const getProductsById = async (req, res) => {
    const { identificador } = req.params
    const data = await productsServices.getProductsById(identificador)
    res.send(data)
}

export default {
    getAllProducts,
    getProductsById
}