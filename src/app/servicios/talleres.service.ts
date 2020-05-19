import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioBaseService } from './servicio-base.service';
import { Taller } from '../modelos/taller.model';

@Injectable({
  providedIn: 'root'
})
export class TalleresService extends ServicioBaseService {
  constructor(public http: HttpClient) {
    super(http);
  }

  colleccion = "talleres";
  
  public crearTaller(taller: Taller) {
    return super.crear(taller,this.colleccion);
  }

  public actualizarTaller(taller: Taller) {
    return super.actualizar(taller,this.colleccion);
  }

  public eliminarTaller(id: string) {
    return super.eliminar(id,this.colleccion);
  }

  public getTalleres() {
    return super.obtenerTodo(this.colleccion);
  }

  public getTaller(id: string) {
    return super.obtenerPorId(id, this.colleccion);
  }
}