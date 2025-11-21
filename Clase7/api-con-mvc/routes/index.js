import express from "express"
import productsControllers from "../controllers/index.js"

const router = express.Router()

router.get("/products", productsControllers.getAllProducts)

router.get("/products/:identificador", productsControllers.getProductsById)

export default router