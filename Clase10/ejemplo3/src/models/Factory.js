import NumsMemModel from "./DAO/nums.model.mem.js"
import NumsFsModel from "./DAO/nums.model.fs.js"

class Factory {
    static get(persistence) {
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del Servidor.")
                return new NumsMemModel();
            case "FS":
                console.log("Persistiendo en la memoria de File System.")
                return new NumsFsModel();
            default:
                console.log("Persistiendo en la memoria por default.")
                return new NumsMemModel();
        }
    }
}

export default Factory