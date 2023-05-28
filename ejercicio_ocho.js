// Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
// imprima por pantalla usando document.write().

function getRandomArbitrary(min, max) {
    //inicializo un array vacío para pushear los números
    numeros = [];
    for (let i= 1; i < max; i++){
        //con un for, hasta max, genero los números uno por uno
        num = Math.floor(Math.random() * (max - min) + min);
        //verifico que el número no se repita en el array, haciendo que
        //mientras indexOf sea distinto a -1 siga generando el número aleatorio... luego añado al array ese número
        while (numeros.indexOf(num) != -1){
            num = Math.floor(Math.random() * (max - min) + min);
        }
        numeros.push(num);
    }

    //añado con un document.write los numeros al documento
    for (let i = 0; i < numeros.length; i++) {
        document.write('Número aleatorio ', i+1, ' = ', numeros[i] + '<br>');
    }
}

getRandomArbitrary(1, 101);
