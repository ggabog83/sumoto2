import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private home : Home = {
    mensajeBienvenida: 'Bienvenidos',
    subMensaje: 'Al Sistema de administración de su moto al día.'
   }

  constructor() { }

  public getHome():Home{
    return this.home;
    
  }
}

export interface Home{
  mensajeBienvenida: string;
  subMensaje:string;
}

