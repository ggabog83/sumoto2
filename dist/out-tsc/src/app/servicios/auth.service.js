import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
        this.apiKey = "AIzaSyDxSLhFVPP83sl07quPqr-HucouhyTyrXs";
        this.userToken = "";
    }
    registro(login) {
        const authData = {
            email: login.email,
            password: login.password,
            returnSecureToken: true
        };
        return this.http.post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData).pipe(map(resp => {
            this.guardarToken(resp['idToken']);
            return resp;
        }));
    }
    guardarToken(idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
        let hoy = new Date();
        hoy.setSeconds(3600);
        localStorage.setItem('expira', hoy.toString());
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map