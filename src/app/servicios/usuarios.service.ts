import { Injectable } from '@angular/core';
import { ServicioBaseService } from './servicio-base.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends ServicioBaseService {
  constructor(public http: HttpClient) {
    super(http);
  }

  colleccion = "usuarios";

  public crearUsuario(usuario: Usuario) {
    return super.crear(usuario,this.colleccion);
  }

  public actualizarUsuario(usuario: Usuario) {
    return super.actualizar(usuario,this.colleccion);
  }

  public eliminarUsuario(id: string) {
    return super.eliminar(id,this.colleccion);
  }

  public getUsuarios() {
    return super.obtenerTodo(this.colleccion);
  }

  public getUsuario(id: string) {
    return super.obtenerPorId(id, this.colleccion);
  }

  public getTiposUsuario() {
    return super.obtenerTodo('tiposUsuario');
  }
}




