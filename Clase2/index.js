// alert("Hoy es 04/08/2025")
console.log("Hola a todos!")

console.log("")

// ECMAScript anterior 2015
// var está deprecado
var x = 10 // number
x = 18
x = '04/08/2025' // string
x = [] // array
x = {} // object
x = null
x = undefined



// ECMAScript ES6
let y = 10
let z = 5

// constantes: es inmutable su valor
const a = 25
const b = 35

y = 100

console.log('x es igual a: ', x)
console.log('y es igual a: ', y)
console.log('y, z y a son iguales a: ', y, z, a)

// a las constantes no se le puede reasignar el valor
// a = 50    // index.js:33 Uncaught TypeError: Assignment to constant variable.
            // (anónimas)	@	index.js:33

console.log("")

// Programación funcional
// Arrow function (función flecha)
const s = () => {

}

// Otra forma de declarar una función ...
function sumar () {
    const suma = a + b
    console.log('SUMA DE a + b: ', suma)
}

console.log("sumar")
console.log('a es igual a: ', a)
console.log('b es igual a: ', b)

// Invocar a la función sumar ...}
sumar()

console.log("")

// reasignamos un nuevo valor a var x ...
console.log("Reasignamos un nuevo valor (100) a var x ...")
x = 100
console.log("restar")
console.log('x es igual a: ', x)
console.log('b es igual a: ', b)

function restar () {
    const resta = x - b
    console.log('RESTA DE x - b: ', resta)
}

restar()

console.log("")

// scope -> rango de aplicación/alcance de un valor
//ej: var x toma el valor que esté dentro de la función por más que también esté declarada fuera del bloque
console.log("Declaramos una nueva var x dentro del scope de la función restar2 con un valor igual a 200")
console.log("restar2")
function restar2 () {
    var x = 200
    let b = 75
    // const resta2 = x - b
    let resta2 = x - b
    console.log('Dentro de scope de restar2')
    console.log('x es igual a: ', x)
    console.log('b es igual a: ', b)
    console.log('RESTA DE x - b: ', resta2)
    console.log("")
    console.log('Redefinimos dentro de la función restar2 var x = y')
    var x = y
    resta2 = x - b
    console.log('x es igual a: ', x)
    console.log('b es igual a: ', b)
    console.log('RESTA DE x - b: ', resta2)
    console.log('Reasignamos a la variable x (el valor 200) dentro de la función restar2')
    x = 200
}

restar2()

console.log("")

console.log('Fuera de scope de restar2')
console.log('x es igual a: ', x)
console.log('b es igual a: ', b)

console.log("")


console.log('x es igual a: ', x)
console.log('y es igual a: ', y)
console.log('y, z y a son iguales a: ', y, z, a)

console.log("")

const z1 = (num1, num2) => {
    const sumaZ1 = num1 + num2
    console.log('SUMA Z1: ', sumaZ1)
}

// Invocar a la función z1...}
// Sumar number + number
z1(45, 55)

// Sumar numbstring
z1(45, "55")

console.log("")

// Condicionales
console.log("typeof(a === 'number')")
console.log(typeof(a === "number")) // el tipo de dato (a === "number") ==> es un boolean
console.log("")
console.log("typeof(a)")// el tipo de dato (a === "number") ==> es un boolean
console.log(typeof(a)) // el tipo de dato (a)  ==> es un number


console.log("")

console.log('a: ', a)
if(typeof(a) === "number") {
    console.log("a es de tipo number")
} else {
    console.log("a no es de tipo number")
}

console.log("")

a1 = "'25'"
console.log('a1: ', a1)
if(typeof(a1) === "number") {
    console.log("a1 es de tipo number")
} else {
    console.log("a1 no es de tipo number")
}

console.log("")

console.log('a: ', a)
if(typeof(a) !== "number") {
    console.log("a no es de tipo number")
} else {
    console.log("a es de tipo number")
}

console.log("")

console.log('a es igual a: ', a)
console.log('b es igual a: ', b)
console.log("CONDICION: typeof(a === 'number' && typeof(b) === 'number')")
if(typeof(a) === "number" && typeof(b) === "number"){
    console.log("Se da la condición!")
} else{
    console.log("No se cumple la condición")
}

console.log("")

//una vez que la condición se cumple sale del condicional
console.log("CONDICION: typeof(a === 'numbr' || typeof(b) === 'numbe') || typeof(y) === 'nuber')")
if(typeof(a) === "numbr"){
    console.log("A")
} else if( typeof(b) === "numbe"){
    console.log("B")
}else if( typeof(y) === "nmber"){
    console.log("Y")
} else {
    console.log("No se cumple ninguna condición")
}

console.log("")

const estudiantes = {
    nombre: "Maria Gimenez",
    edad: 28,
    nota: 10
}
console.log('estudiantes: ', estudiantes)

console.log("")

//parámetros a una función flecha
const nombre = "Juan Pablo!"
//template string -> comillas invertidas para poder pasar variables directamente
const xyz = (a) => console.log(`Tu nombre es: ${a}`)
//invocar una función flecha
xyz(nombre)

console.log("")

console.log("XYZ: ", xyz)
console.log("TYPE OF xyz: ", typeof(xyz))
console.log("TYPE OF 'xyz': ", typeof('xyz'))


