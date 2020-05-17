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
        map((resp:any) => {
        entidad.id = resp.name;
        return entidad;
      })
      );
  }

  actualizar(entidad: any, colleccion: string) {

    const entidadTemp ={
      ...entidad
    }

    delete entidadTemp.id;

    return this.http.put(
      `${this.url}${colleccion}/${entidad.id}.json`, entidadTemp).pipe(
        map((resp:any) => {
        entidad.id = resp.name;
        return entidad;
      })
      );
  }

  eliminar(entidad: any, colleccion: string) {

    const entidadTemp ={
      ...entidad
    }

    delete entidadTemp.id;

    return this.http.delete(
      `${this.url}${colleccion}/${entidad.id}.json`, entidadTemp).pipe(
        map((resp:any) => {
        entidad.id = resp.name;
        return entidad;
      })
      );
  }

  obtenerTodo(colleccion: string){
    return this.http.get(
      `${this.url}${colleccion}.json`).pipe(
        map((resp:any) => {
        
        return this.crearArreglo(resp);
      })
      );
  }

  obtenerPorId(id:string,colleccion: string){
    return this.http.get(
      `${this.url}${colleccion}/${id}.json`).pipe(
        map((resp:any) => {
        
        return this.crearArreglo(resp);
      })
      );
  }

  private crearArreglo(entidadesObj:Object){
    const entidades:any[] =[]
    Object.keys(entidadesObj).forEach(key=>{
      const entidad:any = entidadesObj[key]
      entidad.id = key;
      entidades.push(entidad);
    })
    return entidades;
  }
}
