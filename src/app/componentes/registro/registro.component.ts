import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/modelos/login.model';
import Swal from 'sweetalert2'
import { AuthService } from '../../servicios/auth.service'
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  login: LoginModel;
  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.login = new LoginModel();
  }

  onSubmit(formRegistro: NgForm) {

    if (formRegistro.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Esperar por favor'
    });
    Swal.showLoading();

    this.authService.registro(this.login).subscribe(resp => {
      Swal.close();
      this.router.navigateByUrl('/mantenimiento')
    }, (err) => {
      console.log(err);
      Swal.fire({
        title: 'Error de autenticacion.',
        icon: 'error',
        text: err.error.error.message
      })
    });
  }
}
