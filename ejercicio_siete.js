//Escribir una función que reciba un texto y lo devuelva al revés.

texto = prompt("Ingrese el texto a invertir: ");

//transformo en un array el texto
arrayTexto = Array.from(texto);

//invierto el array
arrayInvertido = arrayTexto.reverse();

//unifico el array y lo trasnformo en un string
unionFinal = arrayInvertido.join("");

console.log(`Texto original: ${texto} \nTexto invertido: ${unionFinal}`);