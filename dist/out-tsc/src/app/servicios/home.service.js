import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let HomeService = class HomeService {
    constructor() {
        this.home = {
            mensajeBienvenida: 'Bienvenidos',
            subMensaje: 'Al Sistema de administración de su moto al día.'
        };
    }
    getHome() {
        return this.home;
    }
};
HomeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], HomeService);
export { HomeService };
//# sourceMappingURL=home.service.js.map