//String
var cadena = 'Jesus Solis Martinez';
//Number
var edad = 38;
//Boolean
var respuesta = true;
//Any
var cualquiera = 'Hola';
//Array
var arr = ['JavaScript', 'TypeScript'];
var arr2 = [1, 2, 3, 4];
//Multiples tipos
var multiple = 'string ó number';
var nuevoTipo = 21893;
// Let es a nivel de bloque y Var es global
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log("\n    String: ".concat(cadena, ",\n    Number: ").concat(edad, ",\n    Boolean: ").concat(respuesta, ",\n    Any: ").concat(cualquiera, ",\n    Array: ").concat(arr, ",\n    Array Number: ").concat(arr2, ",\n    Multiple: ").concat(multiple, ",\n    Nuevo Tipo: ").concat(nuevoTipo, "\n"));
