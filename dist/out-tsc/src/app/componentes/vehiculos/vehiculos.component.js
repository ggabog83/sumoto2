import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let VehiculosComponent = class VehiculosComponent {
    constructor(_vehiculosService, _router) {
        this._vehiculosService = _vehiculosService;
        this._router = _router;
        this.vehiculos = null;
    }
    ngOnInit() {
        this.vehiculos = this._vehiculosService.getVehiculos();
    }
    editarVehiculo(index) {
        this._router.navigate(['vehiculo_crear_editar', index]);
    }
    crearVehiculo(index) {
        this._router.navigate(['vehiculo_crear_editar', index]);
    }
    eliminarVehiculo(index) {
        alert("se va a eliminar un vehiculo.");
    }
};
VehiculosComponent = tslib_1.__decorate([
    Component({
        selector: 'app-vehiculos',
        templateUrl: './vehiculos.component.html',
        styleUrls: ['./vehiculos.component.css']
    })
], VehiculosComponent);
export { VehiculosComponent };
//# sourceMappingURL=vehiculos.component.js.map