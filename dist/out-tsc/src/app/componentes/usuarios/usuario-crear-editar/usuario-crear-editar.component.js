import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UsuarioCrearEditarComponent = class UsuarioCrearEditarComponent {
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
UsuarioCrearEditarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-usuario-crear-editar',
        templateUrl: './usuario-crear-editar.component.html',
        styleUrls: ['./usuario-crear-editar.component.css']
    })
], UsuarioCrearEditarComponent);
export { UsuarioCrearEditarComponent };
//# sourceMappingURL=usuario-crear-editar.component.js.map