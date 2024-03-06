let arrayVacio = []//array vacio

let arrayFrutas = [manzana, pera, mango, sandia]//array con elementos 

let arrayElmDif = ['Miguel', 5, false]//array con diferentes tipos de datos

var miArray = [];//Crear un array utilizando el constructor array
var otroArray = [1, 2, 3, 4, 5];
var arrayConLongitud = new Array(10); 
var arrayVacio2 = new Array(5);

// Crear un array con una secuencia numérica usando Array.from()
var secuenciaNumerica = Array.from({ length: 10 }, (_, index) => index)
console.log(secuenciaNumerica)

// Crear un array mediante la repetición de un valor usando Array.fill()
var arrayRepetido = new Array(5).fill(10);
console.log(arrayRepetido); 

// Crear un array a partir de una cadena de texto usando String.split()
var cadena = "Hola,esto,es,una,cadena,de,texto";
var arrayTexto = cadena.split(',');
console.log(arrayTexto);

// Arrays existentes
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var arrayCombinado = [...array1, ...array2];
console.log(arrayCombinado); 

//Array con valores duplicados
var arrayConDuplicados = [1, 2, 3, 3, 4, 5, 5];
var conjunto = new Set(arrayConDuplicados);
var arraySinDuplicados = [...conjunto];
console.log(arraySinDuplicados); 

// Función para generar valores dinámicamente
function generarValores(cantidad) {
    return Array.from({ length: cantidad }, () => Math.floor(Math.random() * 100) + 1);
}
var arrayGenerado = generarValores(5); 
console.log(arrayGenerado); 

//Obtener longitud de un array
var miArray = [1, 2, 3, 4, 5];
var longitud = miArray.length;
console.log("La longitud del array es: " + longitud);

//Agregar elementos al final de un array usando push
var miArray = [1, 2, 3, 4, 5];
miArray.push(6);
miArray.push(7);
console.log(miArray); 

//Eliminar el último elemento del array usando pop() :
var miArray = [1, 2, 3, 4, 5];
var ultimoElementoEliminado = miArray.pop();
console.log("Elemento eliminado: " + ultimoElementoEliminado);
console.log(miArray);

//Agregar elementos al principio del array usando unshift() :
var miArray = [2, 3, 4, 5];
miArray.unshift(1);
miArray.unshift(0);
console.log(miArray); 

//Eliminar el primer elemento de un array usando shift
var miArray = [1, 2, 3, 4, 5];
var primerElementoEliminado = miArray.shift();
console.log("Elemento eliminado: " + primerElementoEliminado);
console.log(miArray); 




