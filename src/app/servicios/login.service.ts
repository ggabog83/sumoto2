import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  loginPagina:LoginPagina = null;

  constructor() { }

  public getLoginPagina(){
      return this.loginPagina;
  }
}

export interface Login{
  userName:string;
  password:string;
}

export interface LoginPagina{
    titulo: "Bienvenido, Porfavor Ingresa Tu Cuenta."
}
