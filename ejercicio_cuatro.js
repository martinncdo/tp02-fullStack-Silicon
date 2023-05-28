// Escribir el código de una función a la que se pasa como parámetro un número entero y
// devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
// pantalla el resultado devuelto por la función.
// Por ejemplo si ingresara un dos el resultado debe ser par y si ingresara un 5 el resultado
// debe ser impar

function parImpar (num) {
    //Mientras el número pasado como argumento no sea Number, que solicite al usuario ingresar de nuevo el dato.
    while (isNaN(num)){
        num = prompt("El dato ingresado es incorrecto. Ingrese un número: ");
    }

    //Aplico la operación módulo, si el resto es 0 es par. Si no, impar.
    if (num % 2 == 0){
        resultado = num % 2;
        console.log(`El numero es par. El resultado del resto es ${resultado}`);
    }else{
        resultado = num % 2;
        console.log(`El numero es impar. El resultado del resto es ${resultado}`);
    }
}

numero = prompt("Ingrese un número para saber si es par o impar");
parImpar(Number(numero));