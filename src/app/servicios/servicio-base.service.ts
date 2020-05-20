import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioBaseService {

  private url = "https://sumotoaldia.firebaseio.com/";

  constructor(public http: HttpClient) {
  }

  crear(entidad: any, colleccion: string) {
    return this.http.post(
      `${this.url}${colleccion}.json`, entidad).pipe(
        map((resp: any) => {
          entidad.id = resp.name;
          return entidad;
        })
      );
  }

  actualizar(entidad: any, colleccion: string) {

    const entidadTemp = {
      ...entidad
    }

    delete entidadTemp.id;

    return this.http.put(
      `${this.url}${colleccion}/${entidad.id}.json`, entidadTemp).pipe(
        map((resp: any) => {
          entidad.id = resp.name;
          return entidad;
        })
      );
  }

  eliminar(id: string, colleccion: string) {
    return this.http.delete(
      `${this.url}${colleccion}/${id}.json`);
  }

  obtenerTodo(colleccion: string) {
    return this.http.get(
      `${this.url}${colleccion}.json`).pipe(
        map((resp: any) => {

          return this.crearArreglo(resp);
        })
      );
  }

  obtenerPorId(id: string, colleccion: string) {
    return this.http.get(
      `${this.url}${colleccion}/${id}.json`).pipe(
        map((resp: any) => {
          resp.id = id;
          return resp;
        })
      );
  }

  private crearArreglo(entidadesObj: Object) {
    const entidades: any[] = []
    Object.keys(entidadesObj).forEach(key => {
      const entidad: any = entidadesObj[key]
      entidad.id = key;
      entidades.push(entidad);
    })
    return entidades;
  }

  getMensajesError() {
    return this.mensajesError;
  }

  mensajesError = {
    nombreRequerido: "El nombre es requerido.",
    direccionRequerida: "La direccion es requerida.",
    telefonoRequerido: "El telefono es requerido.",
    placaRequerida: "La placa es requerida.",
    marcaRequerida: "La marca es requerida.",
    colorRequerido: "El color es requerido.",
    modeloRequerido: "El modelo es requerido.",
    propietarioRequerido: "El propietario es requerido.",
    correoRequerido: "El correo es requerido.",
    tipoUsuarioRequerido: "El tipo usuario es requerido.",
    tallerRequerido: "El taller es requerido.",
    tipoMantenimientoRequerido: "El tipo mantenimiento es requerido.",
    fechaRequerida: "La fecha es requerida.",
    mecanicoRequerido: "El mecanico es requerido.",
    vehiculoRequerido: "El vehiculo es requerido.",
    emailRequerido: "El email es requerido.",
    passwordRequerido: "El password es requerido"
  }
}
