let bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'Disco',
    VelocidadMaxima: '60km',
    cambiarColor: function(newColor){
        //bicicleta.color = newColor
        this.color = newColor
    }
}

console.log(bicicleta)

bicicleta.cambiarColor('verde')

console.log(bicicleta)