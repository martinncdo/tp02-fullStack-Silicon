// Crear una función que muestre información sobre una cadena de texto que se le pasa como
// argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
// sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function mayusMinus(texto){
    //Aplico al texto la función parseFloat para transforma en Number.
    //Si no es una string con número, me devolverá NaN.
    //Mientras no me devuelva un "is not a number", que solicite al usuario ingresar nuevamente el texto. 
    //porque significa que el string, es un número. Si es NaN, sale del while.
    while (!(isNaN(parseFloat(texto)))){
        texto = prompt("El dato ingresado es incorrecto. Ingrese una cadena de texto: ");
    }

    //Creo dos variables, la primera con el texto transformado a Mayúsculas.
    let compare1 = texto.toUpperCase();
    //La segunda con el texto transformado a minúsculas.
    let compare2 = texto.toLowerCase();

    //Si es igual a compare1, está en mayúsculas. Lo mismo con el compare2, y si no es igual a ninguna de las dos contiene
    //minúsculas y mayúsculas.
    if (texto === compare1){
        console.log("El texto está escrito en mayúsculas");
    }else if (texto === compare2){
        console.log("El texto está escrito en minúsculas");
    }else{
        console.log("El texto contiene mayúsculas y minúsculas");
    }
}

texto = prompt("Ingrese un texto para saber si está escrito en mayúsculas, minúsculas, o si contiene ambas: ");
mayusMinus(texto);