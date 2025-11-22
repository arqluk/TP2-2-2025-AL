const animals = [
    { id: 1, nombre: "Ballena", caracteristica: "Azul" },
    { id: 2, nombre: "Mapache", caracteristica: "Rabioso" },
    { id: 3, nombre: "Perro", caracteristica: "Amigo" },
    { id: 4, nombre: "Gato", caracteristica: "Independiente" },
    { id: 5, nombre: "León", caracteristica: "El rey de la selva" }
]

// No necesitamos declarar (return await animals) porque por el momento
//  los datos están en el mismo proyecto, pero si los datos estuvieran en
//  una base de datos entonces sería necesario declara el await
//  explícitamente ...
const getAllAnimals = async () => {
    return animals
}

// Necesitamos declarar await porque tenemos que esperar ya que los datos
// van a provenir de otro lado y eso puede demorar ...     
// const getAllAnimals = async () => {
//     const data = await miBaseDeDatos()
// return animals
// }

const postAnimals = async (animal) => {
    // animals.length - 1 -> esto me da la posición del último elemento del array
    // const findId = [animals.length - 1].id
    // console.log(findId)
    animal.id = animals[animals.length - 1].id + 1
    animals.push(animal)
    return animal
}

const putAnimals = async (identificador, animal) => {
    //Lo que viene por parámetros siempre es un string!!!
    //console.log("ID: ", typeof(identificador))
    animal.id = parseInt(identificador)
    //console.log("ANIMAL ID: ", animal.id)
    //La comparación es solo de valor, no considera el tipo de dato!!!
    const index = animals.findIndex((e) => e.id == identificador)
    animals.splice(index, 1, animal)
    return "Actualización exitosa."
}

//Actualización parcial
const patchAnimals = async (identificador, animal) => {
    const index = animals.findIndex((e) => e.id == identificador)
    //Spread operator "..."
    const newAnimal = {...animals[index], ...animal}
    // const newAnimal = {...animal, ...animals[index]}
    animals.splice(index, 1, newAnimal)
    return "Actualización parcial exitosa."
}

const deleteAnimals = async (identificador) => {
    const index = animals.findIndex((animal) => animal.id == identificador)
    if(index == -1) throw new Error("El id del elemento no existe.")
    animals.splice(index, 1)
    return "El animal fue borrado"
}


export default {
    getAllAnimals,
    postAnimals,
    deleteAnimals,
    putAnimals,
    patchAnimals
}