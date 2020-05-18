import { Component, OnInit } from '@angular/core';
import{UsuariosService} from '../../servicios/usuarios.service';
import {Router} from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { TiposUsuario } from 'src/app/modelos/tiposUsuario';
 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:Usuario[]=null;
  tipoUsuarios:TiposUsuario[]= null;

  constructor(private _usuariosService: UsuariosService
               ,private _router:Router) { }

  ngOnInit() {
    this.getTiposUsuario();
    this.getUsuarios();
  }

  editarUsuario(id:string) 
  {
    this._router.navigate(['usuario_crear_editar', id]);
  }

  crearUsuario(id:string) 
  {
    this._router.navigate(['usuario_crear_editar', id]);
  }

  eliminarUsuario(index:number){
    alert("se va a eliminar un usuario.")
  }


  private getTiposUsuario(){
    this._usuariosService.getUsuarios().subscribe(resp =>{
      this.tipoUsuarios = resp;
    });
  }

  private getUsuarios(){
    this._usuariosService.getTiposUsuario().subscribe(resp =>{
      this.tipoUsuarios = resp;
    });
  }
}
