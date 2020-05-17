import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    salir() {
        this.authService.cerrarSesion();
        this.router.navigateByUrl("/login");
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map