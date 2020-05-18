import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../../servicios/usuarios.service';
import {ActivatedRoute} from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';


@Component({
  selector: 'app-taller-crear-editar',
  templateUrl: './taller-crear-editar.component.html',
  styleUrls: ['./taller-crear-editar.component.css']
})
export class TallerCrearEditarComponent implements OnInit {

  usuario:Usuario;
  esEditar:Boolean = false;

  constructor(private _activateRouter:ActivatedRoute,
    private _usuariosService:UsuariosService) {

    this._activateRouter.params.subscribe(params=>{
      let id = params['id'];
      if(id != "-1"){
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
