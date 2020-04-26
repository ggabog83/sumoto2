import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import {LoginService, Login, LoginPagina} from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;
  login:Login = null;
  loginPagina:LoginPagina = null;

  @ViewChild('f', {static: false}) loginForm: NgForm;

  constructor(private _loginService:LoginService ) {
  }

  ngOnInit() {
    this.loginPagina = this._loginService.getLoginPagina();
  }

  public loginF(userLogin: NgForm){
    this.loading = true;
    this.login.userName = userLogin.form.value.userName;
    this.login.password = userLogin.form.value.password;
  }
}

