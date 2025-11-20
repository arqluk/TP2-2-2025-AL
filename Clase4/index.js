//importación de módulos
//common JS
const fs = require("fs")

console.log("");

console.log("Hola!");

console.log("");

//Array
console.log(" *** arrays ***");
const miArray1 = [1, 2, 3, 4, 9]
const miArray2 = [6, 7, 8, 9]
console.log("Mi Array1: ", miArray1)
console.log("Mi Array1 >> length: ", miArray1.length)

console.log("");

//añadimos el 5 al array
console.log("Agregamos el elemento 5 a MiArray1");
miArray1.push(5)
console.log("Mi Array1 después de añadir un elemento >> length: ", miArray1.length)
console.log("Mi Array1: ", miArray1)

console.log("");

//estoy buscando la posición en el array de ese valor
console.log("IndexOF del elemento con valor >>>  1: ", miArray1.indexOf(1))
console.log("IndexOF del elemento con valor >>>  5: ", miArray1.indexOf(5))

console.log("");

console.log("Mi Array1: ", miArray1)
// //eliminamos el primer elemento del array
console.log("Eliminamos el primer elemento del array");
miArray1.shift()
// //añadimos un elemento al principio
console.log("añadimos un elemento con valor >>> 199 al principio del array");
miArray1.unshift(199)
console.log("Mi Array1 modificado: ", miArray1)

console.log("");
console.log("--------------------------------------------------------------");
console.log("");
console.log(" *** objetos ***");

//Objetos
//las claves son un identificador, por lo tanto no se repite
const miObj1 = {a: 1, b: 2, c: 3, d: 4, a: 1999, a: 0}
// const miObj2 = {g: 9888, h: 81, i: 100, j: 7854}
const miObj2 = {g: 9888, h: 81, i: 100, j: 7854, a: 3}

console.log("miObj1: ", miObj1)
console.log("miObj2: ", miObj2)

console.log("");


// // //añadir claves/valor al objeto
console.log("Añadimos claves/valores al objeto");
miObj1.e = 5
miObj1["f"] = 6
console.log("Añadimos clave: e y valor:5 al objeto >>> miObj1"); 
console.log("miObj1 modificado: ", miObj1)
console.log("miObj2: ", miObj2)

console.log("");

// //me traigo solo las claves
console.log("Object Keys: ", Object.keys(miObj1))
// //me traigo solo valores del objeto
console.log("Object Values: ", Object.values(miObj1))

console.log("");

//Desestructuring Object - Desestructuracion de Objetos
console.log("*** Desestructuracion de Objetos ***")

console.log("");
//Array
console.log(" *** arrays ***");

console.log("");

console.log("Mi Array1: ", miArray1)
console.log("Mi Array2: ", miArray2)

console.log("");
const desestructuringArrays1 = [...miArray1, ...miArray2]
const desestructuringArrays2a = [miArray1, ...miArray2]
const desestructuringArrays2b = [...miArray1, miArray2]
const desestructuringArrays3 = [miArray1, miArray2]

console.log("[...miArray1, ...miArray2]")
console.log("desestructuringArrays1: ", desestructuringArrays1)

console.log("");

console.log("[miArray1, ...miArray2]")
console.log("desestructuringArrays2a: ", desestructuringArrays2a)

console.log("");

console.log("[...miArray1, miArray2]")
console.log("desestructuringArrays2b: ", desestructuringArrays2b)

console.log("");

console.log("[miArray1, miArray2]")
console.log("desestructuringArrays3: ", desestructuringArrays3)

//"..." -> spread operator para expandir los elementos, propagarlos, fusionarlos, etc

console.log("");
console.log("--------------------------------------------------------------");
console.log("");

console.log(" *** objetos ***");

console.log("");



//Objetos
const desestructuringObj1 = {...miObj1, ...miObj2}
const desestructuringObj2 = {miObj1, ...miObj2}
const desestructuringObj2b = {...miObj1, miObj2}
const desestructuringObj3 = {miObj1, miObj2}

console.log("{...miObj1, ...miObj2}")
console.log("desestructuringObj1: ", desestructuringObj1)

console.log("");

console.log("{miObj1, ...miObj2}")
console.log("desestructuringObj2: ", desestructuringObj2)

console.log("");

console.log("{...miObj1, miObj2}")
console.log("desestructuringObj2b: ", desestructuringObj2b)

console.log("");

console.log("{...miObj1, miObj2}")
console.log("desestructuringObj3: ", desestructuringObj3)

console.log("");
console.log("--------------------------------------------------------------");
console.log("");

//Array de objetos con datos
console.log("*** Array de objetos con datos ***")

console.log("");

const misDatos = [
    {nombre: "Maria Luisa", nota: 10, email: "marialuisa@gmail.com"},
    {nombre: "Juan Pablo", nota: 9, email: "juanpablo@gmail.com"},
    {nombre: "Santiago", nota: 8, email: "santiago@gmail.com"}
]

console.log("misDatos: ", misDatos)

console.log("");

console.log("*** filter((element) => element.nota == 10) ***")
const misDatosFiltrados = misDatos.filter((element) => element.nota == 10)
console.log("misDatosFiltrados: ", misDatosFiltrados)

console.log("");
console.log("misDatos: ", misDatos)

console.log("*** map((elem) => elem.nota == 8)")
const misDatosMapeados = misDatos.map((elem) => elem.nota == 8)
console.log("misDatosMapeados: ", misDatosMapeados)

console.log("");

console.log("misDatos: ", misDatos)

console.log("");

//filter y map aplicados a objetos con datos
console.log("miObj2: ", miObj2)
const miObj2Entries =  Object.entries(miObj2)
console.log("miObj2Entries: ", miObj2Entries)
console.log("miObj2EntriesComoObject: ", Object.fromEntries(miObj2Entries))

console.log("");

console.log("*** filter(([clave, valor]) => valor > 100)")
const miObjFiltrado = Object.entries(miObj2).filter(([clave, valor]) => valor > 100)
console.log("miObjFiltradoEntries: ", miObjFiltrado)
console.log("miObjFiltradoComoObject: ", Object.fromEntries(miObjFiltrado))

console.log("");
console.log("--------------------------------------------------------------");
console.log("");

// Agregado por mí (no está en clase grabada) ...
const persona = {
    nombre: "Ana",
    edad: 30,
    profesion: "dev"
};

console.log("Persona: ", persona);

console.log("");

console.log("*** Object.entries(persona).filter(([clave, valor]) => typeof valor === 'string') ***")

const filtrado = Object.entries(persona)
    .filter(([clave, valor]) => typeof valor === "string");

console.log(Object.fromEntries(filtrado)); 
// { nombre: 'Ana', profesion: 'dev' } 

console.log("");
console.log("--------------------------------------------------------------");
console.log("");

//Procesos sincrónicos: hay que esperar para que el hilo de ejecución continúe (bloqueante)
//Procesos asincrónicos: no hay que esperar una respuesta (no bloqueante)

//File System Sincronico
console.log("*** File System Sincronico ***") 

console.log("");

console.log("--------INICIO---------")

const file = fs.readFileSync("doc.txt", "utf-8")
console.log("File: ", file) 
const writeFile = fs.writeFileSync("doc.txt", "Sobreescribir mi archivo!")
const updateFile = fs.readFileSync("doc.txt", "utf-8")
console.log("FileUpdate: ", updateFile)  
console.log("File después: ", file)  

console.log("--------FIN---------")  

// function tp(a, b){
//     //solucion del ejercicio 
// }

// invocar para ver el resultado
// tp()

// funcion flecha
// const miFuncion = (a, b) => {
//     //solucion a mi problema
// }

// invocar para ver el resultado
// miFuncion()