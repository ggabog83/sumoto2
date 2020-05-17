import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ServicioBaseService } from './servicio-base.service';
let AliadosService = class AliadosService extends ServicioBaseService {
    constructor(http) {
        super(http);
        this.http = http;
        this.colleccion = "aliados";
    }
    getAliados() {
        return super.obtenerTodo(this.colleccion);
    }
};
AliadosService = tslib_1.__decorate([
    Injectable()
], AliadosService);
export { AliadosService };
//# sourceMappingURL=aliados.service.js.map