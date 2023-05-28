// Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
// Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días.

//creo un objeto meses que contiene objetos con los números que le corresponde a cada mes, con un objeto
//dentro, que contiene sus nombres y la cantidad de días de los mismos.
let meses = {
    "1": {
    mes: "enero",
    dias: 31},
    "2": { mes: "febrero",
    dias: 28},
    "3": { mes: "marzo",
    dias: 31},
    "4": { mes: "abril",
    dias: 30},
    "5": { mes: "mayo", 
    dias: 31},
    "6": { mes: "junio",
    dias: 30},
    "7": { mes: "julio",
    dias: 31},
    "8": { mes: "agosto",
    dias: 31},
    "9": {mes: "septiembre",
    dias: 30},
    "10": { mes: "octubre",
    dias: 31},
    "11": { mes: "noviembre",
    dias: 30},
    "12": { mes: "diciembre",
    dias: 31}
}

let expReg = /^(1[0-2]|[1-9])$/;
//creo una expresion regular, patrón que considera los números 10, 11, 12... y del 1 al 9.

//mientras test sea falso, significa que no cumplió con el patrón lo ingresado por el usuario.
let solicitud = prompt("Ingrese el número del mes (del 1 al 12) para saber cuántos días contiene: ");
while (!expReg.test(solicitud)){
    solicitud = prompt("Debe ingresar un número del 1 al 12: ");
}

//creo dos objetos, con las claves y valores del objeto mes.
let clavesMeses = Object.keys(meses);
let valuesMeses = Object.values(meses);

let bandera = false;

//si el numero que ingresó el usuario es igual a uno de los objetos que están dentro del objeto mes, muestra por consola
//su nombre y la cantidad de días
for (let i = 0; i < clavesMeses.length && !bandera; i++) {
    if (solicitud === clavesMeses[i]){
        console.log(`El mes ${valuesMeses[i].mes} tiene ${valuesMeses[i].dias} días`);
        bandera = true;
    }
}



