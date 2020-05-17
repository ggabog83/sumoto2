import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let MantenimientoService = class MantenimientoService {
    constructor() {
        this.mantenimientos = [
            {
                tipoMantenimiento: "Preventivo",
                fecha: "12/04/2020",
                mecanico: "juan alzare",
                vehiculo: "Kawasaki",
                observaciones: "Revizar ruido en moto."
            },
            {
                tipoMantenimiento: "Correctivo",
                fecha: "12/04/2020",
                mecanico: "juan gabriel",
                vehiculo: "Harley-Davidson",
                observaciones: "Cambio de liquido de frenos"
            }
        ];
    }
    getMantenimientos() {
        return this.mantenimientos;
    }
    getMantenimiento(index) {
        return this.mantenimientos[index];
    }
};
MantenimientoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], MantenimientoService);
export { MantenimientoService };
//# sourceMappingURL=mantenimiento.service.js.map