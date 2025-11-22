class UserMemModel {
    constructor() {
        // Inicializar instancias de clase ...
        this.users = [
            { id: 1, nombre: "Ale" },
            { id: 2, nombre: "Ben" },
            { id: 3, nombre: "Cam" },
            { id: 4, nombre: "Dan" },
            { id: 5, nombre: "Eva" }
        ] 

    }

    //Métodos de la clase ...
    // Sintaxis de arrow function
    getAllUsers = async () => {
        return await this.users
    }

    // Sintaxis de function 
    // getAllUsers = function() {
    //     async () => {
    //         return await this.users
    // }
}



export default UserMemModel