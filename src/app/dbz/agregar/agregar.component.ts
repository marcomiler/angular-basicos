import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje ={
    nombre: 'Maestro Roshi',
    poder: 100
  }

  constructor(private dbzService: DbzService){}

  //Emitimos evento al padre(MainPageComponent)
  // @Output()
  // onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNewPersonaje.emit(this.nuevo);

    console.log(this.nuevo);
    this.nuevo = {nombre: '', poder: 0};
  }

}
