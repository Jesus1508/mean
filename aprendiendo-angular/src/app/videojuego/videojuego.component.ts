import { Component } from "@angular/core";

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponen {

  public titulo: string;
  public listado: string

  constructor () {
    this.titulo = 'Componente de videojuegos'
    this.listado = 'Listado de los juegos mas populares'

    console.log('Componente videojuego cargado')
  }
}
