import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MantenimientoCrearEditarComponent = class MantenimientoCrearEditarComponent {
    constructor(_activateRouter, _mantenimientoService) {
        this._activateRouter = _activateRouter;
        this._mantenimientoService = _mantenimientoService;
        this.esEditar = false;
        this._activateRouter.params.subscribe(params => {
            let indice = params['index'];
            if (indice != -1) {
                this.esEditar = true;
                this.mantenimiento = this._mantenimientoService.getMantenimiento(indice);
            }
            else {
                this.esEditar = false;
            }
        });
    }
    ngOnInit() {
    }
};
MantenimientoCrearEditarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mantenimiento-crear-editar',
        templateUrl: './mantenimiento-crear-editar.component.html',
        styleUrls: ['./mantenimiento-crear-editar.component.css']
    })
], MantenimientoCrearEditarComponent);
export { MantenimientoCrearEditarComponent };
//# sourceMappingURL=mantenimiento-crear-editar.component.js.map