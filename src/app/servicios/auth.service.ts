import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../modelos/login.model';
import { map } from 'rxjs/operators';
import { ServicioBaseService } from './servicio-base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url='https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey="AIzaSyDxSLhFVPP83sl07quPqr-HucouhyTyrXs";
  private userToken:string;

  constructor(private http:HttpClient, private _servicioBase:ServicioBaseService) { 
    this.leerToken();
  }

  registro(login:LoginModel){
    const authData={
      email:login.email,
      password:login.password,
      returnSecureToken:true
    }

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData).pipe(map(resp => {
          this.guardarToken(resp['idToken'])
          return resp;
        })
    );
  }

  private guardarToken(idToken){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira',hoy.toString());
  }


  login(login:LoginModel){
    const authData={
      email:login.email,
      password:login.password,
      returnSecureToken:true
    }

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData).pipe(map(resp => {
          this.guardarToken(resp['idToken'])
          return resp;
        })
    );
  }

  autenticado():boolean{
    if(this.userToken.length<2){
      return false;
    }

    const expira = localStorage.getItem('expira');
    const expiraFecha = new Date(expira);

    if(expiraFecha > new Date()){
      return true;
    }
  }

  private leerToken(){
    if(localStorage.getItem('token')){
        this.userToken = localStorage.getItem('token');
    }else{
        this.userToken = "";
    }
  }

  cerrarSesion(){
    localStorage.removeItem('token');
  }

  getMensajesError(){
    return this._servicioBase.getMensajesError();
  }
}
