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
        if (formLogin.invalid) {
            return;
        }
        Swal.fire({
            allowOutsideClick: false,
            text: 'Esperar por favor'
        });
        Swal.showLoading();
        this.authService.login(this.login).subscribe(resp => {
            Swal.close();
            this.router.navigateByUrl('/home');
        }, (err) => {
            console.log(err);
            Swal.fire({
                title: 'Error de autenticacion.',
                icon: 'error',
                text: err.error.error.message
            });
        });
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