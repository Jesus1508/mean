interface CamisetaBase{
    setColor(color)
    getColor()
}

//Decorador
function estampar(logo: string){
    return function (target: Function){
        target.prototype.estampacion = function():void{
            console.log(`Estampado terminado !!! ${logo}`)
        }
    }
}

/* 
    - Clase (Molde)
    - Propiedades (caracteristicas del objeto)
    - Método (Funciones o acciones del objeto)
*/

//Molde
//export class Camiseta{
//@estampar('Nike')
class Camiseta implements CamisetaBase{

    constructor(color, modelo, marca, talla, precio){
        this.color = color
        this.modelo = modelo
        this.marca = marca
        this.talla = talla
        this.precio = precio
    }

    //Propiedades
    private color    : string;
    private modelo   : string;
    private marca    : string;
    private talla    : string;
    private precio   : number;

    public setColor (color){
        this.color = color
    }

    public getColor(){
        return this.color;
    }
}

let camiseta = new Camiseta('rojo', 'Manga Larga', 'Nike', 'L', 14)

camiseta.setColor('Rojo')

//camiseta.getColor()

// camiseta.color  = 'Rojo'
// camiseta.modelo = 'Manga Larga'
// camiseta.marca  = 'Nike'
// camiseta.talla  = 'L'
// camiseta.precio = 10

console.log(camiseta)



let camiseta2 = new Camiseta('verde', 'Corta', 'Adidas', 'M', 12)

console.log(camiseta2)

//Calse Hija => Herencia

class Sudadera extends Camiseta {
    public gorra : boolean

    setGorra(gorra : boolean){
        this.gorra = gorra
    }

    getGorra() : boolean{
        return this.gorra
    }
}

let sud = new Sudadera('Negra', 'N', 'Adidas', 'M', 12)

sud.setGorra(true)
sud.setColor('Azul')

console.log(sud)