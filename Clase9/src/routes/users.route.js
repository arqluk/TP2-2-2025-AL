import express from "express";
import UsersController from "../controllers/users.controller.js";

// Nombres de las clases SIEMPRE en mayúscula >>> buenas nprácticas ...
class Router {
    constructor() {
        // Instanciar una instancia de express.Router
        this.router = express.Router()
    
        // Instanciar una instancia de la clase UsersController
        // this.controller = UsersController // así daria error porque no creamos una instancia de la clase UserController 
        this.controller = new UsersController()
    }

    start() {
        //this.router.get("/", this.controller.getAllUsers)
        this.router.get("/users", this.controller.getAllUsers)
        //this.router.get("/users", this.controller.getAllUsers)
        // Resto de declaración de rutas
        // this.router.post(....)
        // this.router.getById(...)

        // Esta forma de retornar aplica en esta capa específicamente!
            return this.router
    }

}

export default Router
