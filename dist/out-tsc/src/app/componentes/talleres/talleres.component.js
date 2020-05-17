import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TalleresComponent = class TalleresComponent {
    constructor(_talleresService, _router) {
        this._talleresService = _talleresService;
        this._router = _router;
        this.talleres = null;
    }
    ngOnInit() {
        this.talleres = this._talleresService.getTalleres();
    }
    editarTaller(index) {
        this._router.navigate(['taller_crear_editar', index]);
    }
    crearTaller(index) {
        this._router.navigate(['taller_crear_editar', index]);
    }
    eliminarTaller(index) {
        alert("se va a eliminar un taller.");
    }
};
TalleresComponent = tslib_1.__decorate([
    Component({
        selector: 'app-talleres',
        templateUrl: './talleres.component.html',
        styleUrls: ['./talleres.component.css']
    })
], TalleresComponent);
export { TalleresComponent };
//# sourceMappingURL=talleres.component.js.map