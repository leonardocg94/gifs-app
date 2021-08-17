import { GitsService } from './../services/gits.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GitsService){}

  buscar(){
    this.gifsService.buscarGifs(this.txtBuscar.nativeElement.value)
    this.txtBuscar.nativeElement.value = ""
  }
}
