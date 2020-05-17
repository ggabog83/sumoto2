import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UsuariosComponent = class UsuariosComponent {
    constructor(_usuariosService, _router) {
        this._usuariosService = _usuariosService;
        this._router = _router;
        this.usuarios = null;
        this.tipoUsuarios = null;
    }
    ngOnInit() {
        this.tipoUsuarios = this._usuariosService.getTiposUsuario();
        this.usuarios = this._usuariosService.getUsuarios();
    }
    editarUsuario(index) {
        this._router.navigate(['usuario_crear_editar', index]);
    }
    crearUsuario(index) {
        this._router.navigate(['usuario_crear_editar', index]);
    }
    eliminarUsuario(index) {
        alert("se va a eliminar un usuario.");
    }
};
UsuariosComponent = tslib_1.__decorate([
    Component({
        selector: 'app-usuarios',
        templateUrl: './usuarios.component.html',
        styleUrls: ['./usuarios.component.css']
    })
], UsuariosComponent);
export { UsuariosComponent };
//# sourceMappingURL=usuarios.component.js.map