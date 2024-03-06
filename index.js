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





