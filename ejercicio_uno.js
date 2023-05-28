// A partir del siguiente array que se proporciona:
// var valores = [true, false, 2, "hola", "mundo", 3, "char"];
// 1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
// 2. Imprimir estos elementos de menor a mayor cantidad de letras.
// 3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
// multiplicación y división) realizadas con los dos elementos numéricos

let valores = [true, false, 2, "hola", "mundo", 3, "char"];


// 1. Determino el elemento de texto mayor.

        //Creo un nuevo array con el método filter, solamente contiene elementos de tipo string.
nuevoArray = valores.filter(valor => typeof valor === "string");

        //Imprimo el nuevo array para comprobar su contenido.
console.log(nuevoArray);
console.log(nuevoArray.length);

let mayor = nuevoArray[0];

        //Declaro una variable mayor con el primer elemento del array, y para cada elemento comparo su 
        //longitud con la string que contiene la variable mayor. En caso de tener más caracteres ocupa su lugar, y así
        //sucesivamente.
nuevoArray.forEach(element => {
    if (element.length > mayor.length){
        mayor = element;
    }
});

console.log(mayor);

//2. Imprimo los elementos de menor a mayor. 

        //Realizo la operación con un for.
console.log(nuevoArray);

for (let i = 0; i < nuevoArray.length - 1; i++) {
    if (nuevoArray[i].length > nuevoArray[i + 1].length){
        let aux = nuevoArray[i];
        nuevoArray[i] = nuevoArray[i + 1];
        nuevoArray[i + 1] = aux;
    }
}

console.log(nuevoArray);

//3. Realizar las 4 operaciones con los dos elementos númericos.

        //Declaro cuatro funciones, una para cada operación.
function suma (num1, num2){
    let resultado = num1 + num2;
    console.log(`La suma de los dos valores es ${resultado}`);
}

function resta (num1, num2){
    let resultado = num1 - num2;
    console.log(`La resta de los dos valores es ${resultado}`);
}

function multiplicacion (num1, num2){
    let resultado = num1 * num2;
    console.log(`La multiplicación de los dos valores es ${resultado}`);
}

function division (num1, num2){
    let resultado = num1 / num2;
    console.log(`La división de los dos valores es ${resultado}`);
}

        //Creo un nuevo array con los valores de tipo númerico.
arrayNumerico = valores.filter(valor => typeof valor === "number");
console.log(arrayNumerico);

        //Llamo a las funciones con los dos elementos del nuevo array como argumentos.
suma(arrayNumerico[0], arrayNumerico[1]);
resta(arrayNumerico[0], arrayNumerico[1]);
multiplicacion(arrayNumerico[0], arrayNumerico[1]);
division(arrayNumerico[0], arrayNumerico[1]);