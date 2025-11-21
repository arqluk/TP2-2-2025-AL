console.log("")
console.log("-------------------------------------------------------------")
// console.log("")
console.log("-------------------------------------------------------------")
console.log("")

console.log("Hola, esto es un ejemplo de asincronismo");

console.log("")

function consultaDePalabrasSinAsync() {
    const data = fetch ("https://texto.deno.dev/palabras?cantidad=10")
    
    // Como data va a ser siempre una Promise Pending podría obviarse declarar la const data,
    // ya que la respuesta sólo la podermos obtener en el bloque .then() ...
    // fetch ("https://texto.deno.dev/palabras?cantidad=10")
    //             .then((res) => console.log("Respuesta dentro del bloque then: ", res))
    
    // Si declaramos data como const entonces podemos hacer ...
        data.then((res) => console.log("Respuesta dentro del bloque then: ", res))
    console.log("")
    console.log(" ----- Sin ASYNC: -----")
    console.log("DATA: ", data)
}

consultaDePalabrasSinAsync()



async function consultaDePalabras() {
    const data = await fetch ("https://texto.deno.dev/palabras?cantidad=10")
    console.log("")
    console.log("----- Con ASYNC -----")
    console.log("Data: ", data)
}

consultaDePalabras()