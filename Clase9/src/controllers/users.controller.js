import UsersService from "../services/users.service.js";

class UsersController {
    constructor() {
        // Intanciar una instancia de la clase UsersService
        //this.service = UsersService // así daría error porque no creamos
        //  una instancia de la clase UsersService ... 
        this.service = new UsersService()
    }

    getAllUsers = async (req, res) => {
        const data = await this.service.getAllUsers()
        // También funciona -> res.send(await this.service.getAllUsers())
        res.send(data)
    }
}

export default UsersController
