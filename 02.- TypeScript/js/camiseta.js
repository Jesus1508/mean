var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Estampado terminado !!! ".concat(logo));
        };
    };
}
/*
    - Clase (Molde)
    - Propiedades (caracteristicas del objeto)
    - Método (Funciones o acciones del objeto)
*/
//Molde
//export class Camiseta{
//@estampar('Nike')
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta('rojo', 'Manga Larga', 'Nike', 'L', 14);
camiseta.setColor('Rojo');
//camiseta.getColor()
// camiseta.color  = 'Rojo'
// camiseta.modelo = 'Manga Larga'
// camiseta.marca  = 'Nike'
// camiseta.talla  = 'L'
// camiseta.precio = 10
console.log(camiseta);
var camiseta2 = new Camiseta('verde', 'Corta', 'Adidas', 'M', 12);
console.log(camiseta2);
//Calse Hija => Herencia
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setGorra = function (gorra) {
        this.gorra = gorra;
    };
    Sudadera.prototype.getGorra = function () {
        return this.gorra;
    };
    return Sudadera;
}(Camiseta));
var sud = new Sudadera('Negra', 'N', 'Adidas', 'M', 12);
sud.setGorra(true);
sud.setColor('Azul');
console.log(sud);
