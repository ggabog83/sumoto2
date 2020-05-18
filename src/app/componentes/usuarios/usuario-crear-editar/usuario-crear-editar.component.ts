import { Component, OnInit} from '@angular/core';
import {UsuariosService} from '../../../servicios/usuarios.service';
import {ActivatedRoute} from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-usuario-crear-editar',
  templateUrl: './usuario-crear-editar.component.html',
  styleUrls: ['./usuario-crear-editar.component.css']
})
export class UsuarioCrearEditarComponent implements OnInit {
  usuario:Usuario;
  esEditar:Boolean = false;

  constructor(private _activateRouter:ActivatedRoute,
    private _usuariosService:UsuariosService) {
    this._activateRouter.params.subscribe(params=>{
      let id = params['id'];
      if(id != -1){
        this.esEditar = true;
        this._usuariosService.getUsuario(id).subscribe(resp => {
          this.usuario = resp;
        });
      }else{
        this.esEditar = false;
      }
      });
   }

  ngOnInit() {
  }

}
