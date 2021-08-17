import { Component } from '@angular/core';
import { GitsService } from '../services/gits.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  constructor(private gifsService: GitsService) { }

  get resultados(){
    return this.gifsService.resultados
  }

}
