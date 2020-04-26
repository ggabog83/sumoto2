import { Component, OnInit } from '@angular/core';
import{UsuariosService, Usuario, TipoUsuario} from '../../servicios/usuarios.service';
import {Router} from '@angular/router';
 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:Usuario[] = null;
  tipoUsuarios:TipoUsuario[] = null;

  constructor(private _usuariosService: UsuariosService
               ,private _router:Router) { }

  ngOnInit() {
    this.tipoUsuarios = this._usuariosService.getTiposUsuario();
    this.usuarios = this._usuariosService.getUsuarios();
  }

  editarUsuario(index:number) 
  {
    this._router.navigate(['usuario_crear_editar', index]);
  }

  crearUsuario(index:number) 
  {
    this._router.navigate(['usuario_crear_editar', index]);
  }

  eliminarUsuario(index:number){
    alert("se va a eliminar un usuario.")
  }
}
