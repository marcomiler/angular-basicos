import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
      HeroeComponent,
      ListadoComponent
  ],
  //Que quiero que sea visible o publico:
  exports: [
    ListadoComponent
  ],
  //Modulos, solo modulos en los imports
  //Si utilizamos ngFor, ngIf... debemos importar el CommonModule
  imports: [
    CommonModule
  ]
})
export class HeroesModule{}