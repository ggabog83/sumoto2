import { Injectable } from '@angular/core';
import { ServicioBaseService } from './servicio-base.service';
import { HttpClient } from '@angular/common/http';
import { Mantenimiento } from '../modelos/mantenimiento';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService  extends ServicioBaseService {
  constructor(public http: HttpClient) {
    super(http);
  }

  colleccion = "mantenimientos";
  
  public crearMantenimiento(mantenimiento: Mantenimiento) {
    return super.crear(mantenimiento,this.colleccion);
  }

  public actualizarMantenimiento(mantenimiento: Mantenimiento) {
    return super.actualizar(mantenimiento,this.colleccion);
  }

  public eliminarMantenimiento(id: string) {
    return super.eliminar(id,this.colleccion);
  }

  public getMantenimientos() {
    return super.obtenerTodo(this.colleccion);
  }

  public getMantenimiento(id: string) {
    return super.obtenerPorId(id, this.colleccion);
  }
}