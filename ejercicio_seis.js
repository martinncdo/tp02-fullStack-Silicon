// Escribir un script que muestre la posición de la primera vocal de un texto introducido por
// teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1

let texto = prompt("Ingrese el texto para evaluar la primer vocal encontrada: ");
//Creo un array a partir de la string ingresada por el usuario
arrayTexto = Array.from(texto);

//Creo el array vocales
let vocales = ['a', 'e', 'i', 'o', 'u'];

let bandera = false;


//Aplico un for para la array del texto ingresado por el usuario. Por lo tanto al arrancar en la primer posición 
//del array inicia en la primer letra, busca esta letra en el array vocales, y si el resultado es mayor a -1
//significa que encontró una vocal. Imprimirá la información y cambiará el estado de la bandera en true, saliendo
//del ciclo for.
for (let i = 0; i < arrayTexto.length && !bandera; i++) {
    test = vocales.indexOf(arrayTexto[i]);
    if (test > -1) {
        console.log(`La primer vocal encontrada en el texto "${texto}", es "${arrayTexto[i]}" en la posición`, texto.indexOf(arrayTexto[i])+1);
        bandera = true;
    }
}





