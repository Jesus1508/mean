/*
    Funciones tradicionales, pasando tipo de datos
    y definiendo el tipo a devolver
*/
function getNumero(numero) {
    if (numero === void 0) { numero = 10; }
    return "El numero es: ".concat(numero);
}
console.log(getNumero(12));
