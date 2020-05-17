import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let LoginService = class LoginService {
    constructor() {
        this.loginPagina = null;
    }
    getLoginPagina() {
        return this.loginPagina;
    }
};
LoginService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map