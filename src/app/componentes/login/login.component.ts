import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/modelos/login.model';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;
  login: LoginModel;
  mensajesError:any;

  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.login = new LoginModel();
    this.mensajesError = this.authService.getMensajesError();
  }

  onSubmit(formLogin:NgForm){
       
    if (formLogin.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Esperar por favor'
    });
    Swal.showLoading();

    this.authService.login(this.login).subscribe(resp => {
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

