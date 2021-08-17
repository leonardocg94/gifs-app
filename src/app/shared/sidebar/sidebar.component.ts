import { Component } from '@angular/core';
import { GitsService } from 'src/app/gifs/services/gits.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  constructor(private gifsService: GitsService) { }

  get historial(){ return this.gifsService.historial }

  buscar(val: string){
    this.gifsService.buscarGifs(val)
  }
}
