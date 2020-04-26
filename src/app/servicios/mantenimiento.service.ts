import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  private mantenimientos:Mantenimiento[]=[     
  { 
    tipoMantenimiento:"Preventivo",
    fecha: "12/04/2020",
    mecanico: "juan alzare",
    vehiculo: "Kawasaki",
    observaciones: "Revizar ruido en moto."
  },
  {
    tipoMantenimiento:"Correctivo",
    fecha: "12/04/2020",
    mecanico: "juan gabriel",
    vehiculo: "Harley-Davidson",
    observaciones: "Cambio de liquido de frenos"
  }]

  constructor() { }

  public getMantenimientos():Mantenimiento[]{
    return this.mantenimientos;
  }

  public getMantenimiento(index:number):Mantenimiento{
    return this.mantenimientos[index];
  }
}

export interface Mantenimiento{
  tipoMantenimiento: string;
  fecha: string;
  mecanico: string;
  vehiculo: string;
  observaciones: string;
}

