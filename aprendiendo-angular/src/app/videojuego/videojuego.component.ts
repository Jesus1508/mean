import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public listado: string

  constructor () {
    this.titulo = 'Componente de videojuegos'
    this.listado = 'Listado de los juegos mas populares'

    console.log('Componente videojuego cargado')
  }

  ngOnInit(): void {
    console.log("OnInit Ejecutado")
  }

  ngDoCheck(){
    console.log('DoCheck Ejecutado')
  }

  ngOnDestroy(): void {
      console.log("OnDestroy Ejecutado")
  }

  cambiarTitulo(){
    this.titulo = 'Nuevo titulo del componente'
  }
}
