// Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
// < 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5
// “Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”

//Pido al usuario que ingrese la cantidad de notas que tuvo el alumno.
cantidad = parseFloat(prompt("¿Cuántas notas tuvo el alumno en total?"));
//Validación del dato, para que sea un número.
while (isNaN(cantidad)){
    cantidad = parseFloat(prompt("Dato inválido. Debe ser un número."));
}

notas = [];

//Repito un bucle flor según cuantas notas haya tenido el alumno, para que ingresar las notas una por una.
for (i=0; i<cantidad;i++){
nota = parseFloat(prompt("Ingrese las notas del alumno"));
//Validación del dato; que sea number, y que vaya del 0 al 10.
while (isNaN(nota) || nota < 0 || nota > 10){
    nota = parseFloat(prompt("Nota inválida. No es un número o el rango no va desde el 0 al 10."))
};
//Una vez que verifico si el dato es válido, añado al array la nota.
notas.push(nota);
}
//inicializo las variables suma y promedio.
sumaa = 0;
promedio = 0;

//accedo al array de las notas, y utilizo un acumulador. Finalmente divido la suma total de las notas por la cantidad de las mismas.

notas.forEach(nota => {
    sumaa = sumaa + nota;
})

promedio = sumaa / cantidad;

console.log(`El promedio del alumno es ${promedio}`);


