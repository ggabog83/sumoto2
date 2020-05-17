import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginModel } from 'src/app/modelos/login.model';
import Swal from 'sweetalert2';
let RegistroComponent = class RegistroComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.login = new LoginModel();
    }
    onSubmit(formRegistro) {
        if (formRegistro.invalid) {
            return;
        }
        Swal.fire({
            allowOutsideClick: false,
            text: 'Esperar por favor'
        });
        Swal.showLoading();
        this.authService.registro(this.login).subscribe(resp => {
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
RegistroComponent = tslib_1.__decorate([
    Component({
        selector: 'app-registro',
        templateUrl: './registro.component.html',
        styleUrls: ['./registro.component.css']
    })
], RegistroComponent);
export { RegistroComponent };
//# sourceMappingURL=registro.component.js.map