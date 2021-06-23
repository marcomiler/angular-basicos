import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vergueta',
          poder: 10000
        }
      ]; 

    get personajes(): Personaje[]{
        return [...this._personajes];//buena practica
    }

    constructor(){}

    agregarPersonaje(pj: Personaje){
        this._personajes.push(pj);
    }

}
    