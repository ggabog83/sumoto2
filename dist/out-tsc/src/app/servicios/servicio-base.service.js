import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let ServicioBaseService = class ServicioBaseService {
    constructor(http) {
        this.http = http;
        this.url = "https://sumotoaldia.firebaseio.com/";
    }
    crear(entidad, colleccion) {
        return this.http.post(`${this.url}${colleccion}.json`, entidad).pipe(map((resp) => {
            entidad.id = resp.name;
            return entidad;
        }));
    }
    actualizar(entidad, colleccion) {
        const entidadTemp = Object.assign({}, entidad);
        delete entidadTemp.id;
        return this.http.put(`${this.url}${colleccion}/${entidad.id}.json`, entidadTemp).pipe(map((resp) => {
            entidad.id = resp.name;
            return entidad;
        }));
    }
    eliminar(entidad, colleccion) {
        const entidadTemp = Object.assign({}, entidad);
        delete entidadTemp.id;
        return this.http.delete(`${this.url}${colleccion}/${entidad.id}.json`, entidadTemp).pipe(map((resp) => {
            entidad.id = resp.name;
            return entidad;
        }));
    }
    obtenerTodo(colleccion) {
        return this.http.get(`${this.url}${colleccion}.json`).pipe(map((resp) => {
            return this.crearArreglo(resp);
        }));
    }
    obtenerPorId(id, colleccion) {
        return this.http.get(`${this.url}${colleccion}/${id}.json`).pipe(map((resp) => {
            return this.crearArreglo(resp);
        }));
    }
    crearArreglo(entidadesObj) {
        const entidades = [];
        Object.keys(entidadesObj).forEach(key => {
            const entidad = entidadesObj[key];
            entidad.id = key;
            entidades.push(entidad);
        });
        return entidades;
    }
};
ServicioBaseService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ServicioBaseService);
export { ServicioBaseService };
//# sourceMappingURL=servicio-base.service.js.map