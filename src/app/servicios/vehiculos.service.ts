import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VehiculosService {
  private vehiculos:Vehiculo[]=[     
    {
      marca:"Kawasaki",
      color: "amarillo",
      modelo: 2015,
      placa: "rxs187",
      usuario:" pedro infante",
      img:"assets/img/Kawasaki.jpg"
    
    },
    {
     marca: "Harley-Davidson",
      color: "negra",
      modelo: 2015,
      placa: "rxs157",
      usuario: "daniela grisales",
      img:"assets/img/Harley.jpg"
     
    },
    {
    marca: "KTM",
      color: "negra",
      modelo: 2020,
      placa: "rxs197",
      usuario: "daniela grisales",
      img:"assets/img/KTM.jpg"
      
    },
    {
    marca: "BMW",
      color: "negra",
      modelo: 2020,
      placa: "rxs197",
      usuario: "gabriel guevara a",
      img:"assets/img/BMW.jpg"
      
    },]

  constructor() { }

  public getVehiculos():Vehiculo[]{
    return this.vehiculos;
  }

  public getVehiculo(index:number):Vehiculo{
    return this.vehiculos[index];
  }
}

export interface Vehiculo{
  marca: string;
  color: string;
  modelo: number;
  placa: string;
  usuario: string;
  img:string;

}



