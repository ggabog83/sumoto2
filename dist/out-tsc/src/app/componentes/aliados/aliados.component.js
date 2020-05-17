import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AliadosComponent = class AliadosComponent {
    constructor(_aliadoService) {
        this._aliadoService = _aliadoService;
    }
    ngOnInit() {
        this.aliados = this._aliadoService.getAliados();
        console.log(this.aliados);
    }
    getAlidos() {
        return this._aliadoService.getAliados();
    }
};
AliadosComponent = tslib_1.__decorate([
    Component({
        selector: 'app-aliados',
        templateUrl: './aliados.component.html',
        styleUrls: ['./aliados.component.css']
    })
], AliadosComponent);
export { AliadosComponent };
//# sourceMappingURL=aliados.component.js.map