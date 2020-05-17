import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let VehiculoCrearEditarComponent = class VehiculoCrearEditarComponent {
    constructor(_activateRouter, _vehiculoService) {
        this._activateRouter = _activateRouter;
        this._vehiculoService = _vehiculoService;
        this.esEditar = false;
        this._activateRouter.params.subscribe(params => {
            let indice = params['index'];
            if (indice != -1) {
                this.esEditar = true;
                this.vehiculo = this._vehiculoService.getVehiculo(indice);
            }
            else {
                this.esEditar = false;
            }
        });
    }
    ngOnInit() {
    }
};
VehiculoCrearEditarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-vehiculo-crear-editar',
        templateUrl: './vehiculo-crear-editar.component.html',
        styleUrls: ['./vehiculo-crear-editar.component.css']
    })
], VehiculoCrearEditarComponent);
export { VehiculoCrearEditarComponent };
//# sourceMappingURL=vehiculo-crear-editar.component.js.map