import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MantenimientoComponent = class MantenimientoComponent {
    constructor(_mantenimientoService, _router) {
        this._mantenimientoService = _mantenimientoService;
        this._router = _router;
        this.mantenimientos = null;
    }
    ngOnInit() {
        this.mantenimientos = this._mantenimientoService.getMantenimientos();
    }
    editarMantenimiento(index) {
        this._router.navigate(['mantenimiento_crear_editar', index]);
    }
    crearMantenimiento(index) {
        this._router.navigate(['mantenimiento_crear_editar', index]);
    }
    eliminarMantenimiento(index) {
        alert("se va a eliminar un mantenimiento.");
    }
};
MantenimientoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mantenimiento',
        templateUrl: './mantenimiento.component.html',
        styleUrls: ['./mantenimiento.component.css']
    })
], MantenimientoComponent);
export { MantenimientoComponent };
//# sourceMappingURL=mantenimiento.component.js.map