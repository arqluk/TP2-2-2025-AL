// console.log(a1); // mustra undefined porque 'a1' de declaró como var
// console.log(a); // salta error porque 'a' se declaró como let

function saludar() {
    console.log("Bienvenidos a TP2!")
}

saludar()

console.log("");

const a = "0"
const b = 0
var a1 = 5

//IGUALDAD: comparacion del valor
console.log("a: '0'")
console.log("b: ", b)
console.log("a == b: ", a == b)
//IGUALDAD ESTRICTA: comparacion de valor y tipo de dato
console.log("a === b: ", a === b)

console.log("");

const c = 0
let l = 0
var v = 0

// c = 1
l = 1
v = 1
console.log(c,l,v);

// let l = 2
l= 2
var v = 2
console.log(c,l,v);

//Objetos
//clave(propiedades)-valor
const estudiante = {
    nombre: "Juan Pablo",
    nota: 10,
    email: "juanpablolopez@gmail.com",
    telefono: 112000259698633
}

console.log(""); 

console.log("Propiedades del objeto 'estudiante'");
console.log('Nombre: ', estudiante.nombre)
console.log('Nota: ', estudiante.nota)

console.log("");

console.log("Propiedades estudiante antes: ", estudiante)

console.log("");

// console.log("Estudiante: ", estudiante);
// estudiante.turno = "Noche"
// console.log("Agregar propiedades: ", estudiante.turno);

function asignarTurno() {
    estudiante.turno = "Noche"
    console.log("Propiedades estudiante después: ", estudiante)
}
// asignarTurno()

setTimeout(() => {
    asignarTurno()
}, 3000);

//Set Interval y Set Timeout
//Settimeout(delay) ejemplo
// setTimeout(() => {
//     console.log('Settimeout: ')
//     estudiante.turno = "Noche"
//     console.log("Propiedades estudiante después: ", estudiante)
// }, 3000);

//Template Strings
//Comillas invertidas
//ALT + 96
//Ctrl +  Alt + }
//``
console.log(`Hola ${estudiante.nombre}! Tu nota es: ${estudiante.nota}`)

console.log("");


