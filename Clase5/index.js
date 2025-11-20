import fs from "fs";
 
console.log("");

//File System Sincronico
console.log("--------INICIO BLOQUE UNO---------");
function readFileSync() {
    const file = fs.readFileSync("doc-a.txt", "utf-8");
    console.log("File: ", file);
    const writeFile = fs.writeFileSync("doc-a.txt", "Sobreescribiendo Doc A...");
    const updateFile = fs.readFileSync("doc-a.txt", "utf-8");
    console.log("readFileSync con actualizaciones: ", updateFile);
    console.log("readFileSync sin actualizaciones: ", file);
}

readFileSync();

console.log("--------FIN BLOQUE UNO---------");

//Callbacks
//funcion que se pasa como parametro a otra para que sea invocada
function suma(a, b, cb) {
    //return es una palabra reservada que nos sirve para retornar algo, fuerza una respuesta
    return cb(a, b);
}

function suma2(a, b, cb) {
     console.log(cb(a, b)); // en esta sintaxis, la función no retorna nada entonces hacemos console.log()dentro del ámbito de la función para que no se muestre undefined
}

console.log("");

console.log("----- function suma(a, b, cb) { -----");
console.log("-----     return cb(a, b); -----");
console.log("----- } -----");
console.log("");
console.log("----- const operation = (a, b) => a + b -----");
console.log("");
console.log("----- console.log(suma(10, 20, operation)) -----");
console.log("");
const operation = (a, b) => a + b;
console.log("FUNCIÓN SUMA: ", suma(10, 20, operation));

console.log("");
console.log("--------------------------------------------------------------");
console.log(""); 


//File System Asincrónico con Callbacks
//Callback Hell (anidación de callbacks) NOO!!!!
console.log("--------INICIO BLOQUE DOS---------");
function readFileCallback() {
    fs.readFile("doc-b.txt", "utf-8", (error, data) => {
        console.log("Ha ocurrido un error: ", error);
        console.log("Archivo B: ", data);

        fs.writeFile("doc-b.txt", "Sobreescribiendo Doc B...", (err) => {
            console.log("Error: ", err);

            fs.readFile("doc-b.txt", "utf-8", (err, data) => {
                console.log("Data doc B modificado: ", data);
                console.log("Error: ", err);

                fs.readFile("doc-b.txt", "utf-8", (err, data) => {
                    console.log("Data doc B modificado: ", data);
                    console.log("Error: ", err);

                    fs.readFile("doc-b.txt", "utf-8", (err, data) => {
                        console.log("Data doc B modificado: ", data);
                        console.log("Error: ", err);

                        fs.readFile("doc-b.txt", "utf-8", (err, data) => {
                            console.log("Data doc B modificado: ", data);
                            console.log("Error: ", err);

                            fs.readFile("doc-b.txt", "utf-8", (err, data) => {
                                console.log("Data doc B modificado: ", data);
                                console.log("Error: ", err);

                                console.log("");
                                console.log("--------------------------------------------------------------");
                                console.log("");
                            });
                        });
                    });
                });
            });
        });
    });
}
readFileCallback();
console.log("--------FIN BLOQUE DOS---------");

console.log("");
console.log("--------------------------------------------------------------");
console.log("");


// //File System Asincrónico con Promesas
function myPromise(sucess) {
    return new Promise((resolve, reject) => {   // resolve y reject no son palabras reservadas
    if (sucess) {
        resolve("Promesa resuelta!");
    } else {
        reject("La promesa no se pudo cumplir.");
    }
    });
}

//then, finally y catch siempre después de la invocación de la función que nos devuelve una promesa

//A eliminar ----------------------------------------------------------------------------
// console.log("myPromise(true)");
// console.log("Mi Promesa: ", myPromise(true)); // A eliminar ...
// console.log("myPromise(false)");
// console.log("Mi Promesa: ", myPromise(false)); // A eliminar ...
//----------------------------------------------------------------------------

myPromise(true)
    .then((res) => console.log("Caso de éxito de myPromise: ", res))
    .catch((err) => console.log("Caso de error en myPromise: ", err))
    .finally(() => console.log("Esto se retorna de todas formas."))

myPromise(false)
    .then((res) => console.log("Caso de éxito de myPromise: ", res))
    .catch((err) => console.log("Caso de error en myPromise: ", err))
    .finally(() => console.log("Esto se retorna de todas formas."))

console.log("--------INICIO BLOQUE TRES---------");
function readFilePromises() {
    fs.promises
    .readFile("doc-c.txt", "utf-8")
    .then((res) => console.log("Resultado Bloque 3: ", res))
    .then(() => {
      //Fetch: para consumir datos de una API
      //podemos tener distintas operaciones dentro del .then
        // const data = fetch("https://6657b24c5c36170526459cda.mockapi.io/rental/cars").then((res) =>
        // console.log("RESPUESTA FETCH", res)
        // );

        const data = fetch("https://6657b24c5c36170526459cda.mockapi.io/rental/cars").then((res) => {
            // console.log("RESPUESTA FETCH", res);
            return res;
        }); 

        // const data = fetch("https://6657b24c5c36170526459cda.mockapi.io/rental/cars")

        console.log("console.log('TYPEOF: ', typeof data)");
        console.log("TYPEOF: ", typeof data);
        console.log("Data Bloque 3: ", data);

        // data.then((res) => console.log("RESPUESTA FETCH", res));
        // data.then((res) => console.log("Ahora la promesa está resuelta:", res));

        data.then((res) => {
            console.log(" ----- Ahora la promesa está resuelta -----");
            // console.log("Respuesta: ", res);
            console.log("Data Bloque 3: ", data);
        })

        
        function sarasa(data) {
        data.then((res) => console.log("Respuesta en función sarasa: ", res));
        }
        sarasa(data);


        return fs.promises.writeFile(
        "doc-c.txt",
        "Sobreescribiendo Doc C..."
        );
    })
    .catch((err) => console.log(err));
}

readFilePromises();

console.log("--------FIN BLOQUE TRES---------");

console.log("");
console.log("--------------------------------------------------------------");
console.log("");

// //File System Asincrónico con Async/Await
console.log("--------INICIO BLOQUE CUATRO---------");
    async function readFileAsync() {
    //   //bloque try-catch nos permite manejar casos de éxito y error
        try {
        const file = await fs.promises.readFile("doc-d.txt", "utf-8");
        console.log("File doc D: ", file);
        const updateFile = await fs.promises.writeFile("doc-d.txt", "Sobreescribiendo Doc D...");
        } catch (error) {
        console.error("Error en el catch. ", error);
        }
    }
readFileAsync();  

console.log("--------FIN BLOQUE CUATRO---------"); 

console.log("");
console.log("--------------------------------------------------------------");
console.log("");
