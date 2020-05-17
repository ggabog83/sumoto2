import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TallerCrearEditarComponent = class TallerCrearEditarComponent {
    constructor(_activateRouter, _usuariosService) {
        this._activateRouter = _activateRouter;
        this._usuariosService = _usuariosService;
        this.esEditar = false;
        this._activateRouter.params.subscribe(params => {
            let indice = params['index'];
            if (indice != -1) {
                this.esEditar = true;
                this.usuario = this._usuariosService.getUsuario(indice);
            }
            else {
                this.esEditar = false;
            }
        });
    }
    ngOnInit() {
    }
};
TallerCrearEditarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-taller-crear-editar',
        templateUrl: './taller-crear-editar.component.html',
        styleUrls: ['./taller-crear-editar.component.css']
    })
], TallerCrearEditarComponent);
export { TallerCrearEditarComponent };
//# sourceMappingURL=taller-crear-editar.component.js.map