import Factory from "../models/Factory.js"
// import UserMemModel from "../models/DAO/users.model.mem.js";
// import UserFsModel from "../models/DAO/users.model.fs.js";

// DATA ACCESS OBJECT
class UsersService {
    constructor() {
        // Instanciar una instancia de la clase UserMemModel
        //this.model = UserMemModel // acá da error porque no creamos
        //  una instancia de la clase UserMemModel ... 
    // this.model = new UserMemModel()
    // this.model = new UserFsModel()
    //this.model = Factory.get("FS") // (al ser get() un método estático de la clase Factory
//                 entonces no necesitamos una instancia de Factory para poder invocar al
//                 método get() sino que lo hacemos directamente invocando a la clase
    this.model = Factory.get("") 
    }

    getAllUsers = async () => {
        return await this.model.getAllUsers()
    }
    
}

export default UsersService