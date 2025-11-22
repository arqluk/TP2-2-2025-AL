import fs from "fs"

class UserFsModel {
    constructor() {
        // users.json está a la misma altura que package.json
        this.users = "users.json"
    }


    //Métodos de la clase
    getAllUsers = async () => {
        return await fs.promises.readFile(this.users, "utf-8")
    }
}

export default UserFsModel