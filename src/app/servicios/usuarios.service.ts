import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private tiposUsuario:TipoUsuario[] = [
    {nombre: "cliente"},
    {nombre: "mecanico"}
  ];

  private usuarios:Usuario[]=[     
    {
      nombre: "juan gabriel",
      direccion: "Carrera 24 B # 29-01", 
      telefono: 3217771657,
      correo: "ggabog83@gmail.com",
      tipoUsuario:"mecanico",
      taller:"Taller JJ Motos"
    },
    
    {
      nombre: "juan alzare", 
      direccion: "Carrera 24 B # 29-01",
      telefono: 3217771657,
      correo: "ggabog83@gmail.com",
      tipoUsuario:"mecanico",
      taller:"Taller Moto - Mix"
    },
    
    {
    nombre: "daniela grisales",
      direccion: "Cra. 25 ##28-40",
      telefono: 8914446,
      correo: "ggabog83@gmail.com",
      tipoUsuario:"cliente",
      taller:"Taller Moto - Mix"
    },
    {
      nombre: "pedro infante",
      direccion:"Cra. 23 #39-39",
      telefono: 3113077981,
      correo: "ggabog83@gmail.com",
      tipoUsuario:"cliente",
      taller:"Juanchos Motos"
    }]
  constructor() { }

  public getUsuarios():Usuario[]{
    return this.usuarios;
  }

  public getUsuario(index:number):Usuario{
    return this.usuarios[index];
  }

  public getTiposUsuario():TipoUsuario[]{
    return this.tiposUsuario;
  }
}

export interface Usuario{
  nombre: string;
  direccion: string;
  telefono: number;
  correo: string;
  tipoUsuario: string;
  taller: string;
}

export interface TipoUsuario{
  nombre: string;
}



