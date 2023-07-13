//String
let cadena : string = 'Jesus Solis Martinez'
//Number
let edad : number = 38
//Boolean
let respuesta : boolean = true
//Any
let cualquiera : any = 'Hola'
//Array
let arr : Array<string> = ['JavaScript', 'TypeScript']
let arr2 : number[] = [1,2,3,4]
//Multiples tipos
let multiple : string | number = 'string ó number'

//Nuevo tipo
type letNum = string | number

let nuevoTipo : letNum = 21893
// Let es a nivel de bloque y Var es global
var numero1 = 10
var numero2 = 12

if (numero1 == 10){
    let numero1 = 44
    var numero2 = 55

    console.log(numero1, numero2)
}

console.log(numero1, numero2)


console.log(`
    String: ${cadena},
    Number: ${edad},
    Boolean: ${respuesta},
    Any: ${cualquiera},
    Array: ${arr},
    Array Number: ${arr2},
    Multiple: ${multiple},
    Nuevo Tipo: ${nuevoTipo}
`)