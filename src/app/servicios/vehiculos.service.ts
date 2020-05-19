import { Injectable } from '@angular/core';
import { ServicioBaseService } from './servicio-base.service';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../modelos/vehiculo.model';

@Injectable({
  providedIn: 'root'
})

export class VehiculosService extends ServicioBaseService {
  constructor(public http: HttpClient) {
    super(http);
  }

  colleccion = "vehiculos";

  public crearVehiculo(vehiculo: Vehiculo) {
    return super.crear(vehiculo, this.colleccion);
  }

  public actualizarVehiculo(vehiculo: Vehiculo) {
    return super.actualizar(vehiculo, this.colleccion);
  }

  public eliminarVehiculo(id: string) {
    return super.eliminar(id, this.colleccion);
  }

  public getVehiculos() {
    return super.obtenerTodo(this.colleccion);
  }

  public getVehiculo(id: string) {
    return super.obtenerPorId(id, this.colleccion);
  }
}