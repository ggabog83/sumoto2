import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginModel } from 'src/app/modelos/login.model';
import Swal from 'sweetalert2';
let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        this.login = new LoginModel();
    }
    onSubmit(formLogin) {
        Swal.fire({
            allowOutsideClick: false,
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
        //Swal.showLoading();
        console.log("gtg");
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map