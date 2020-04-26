import { Component, OnInit } from '@angular/core';
import {Usuario, UsuariosService} from '../../../servicios/usuarios.service';
import {ActivatedRoute} from '@angular/router';


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
      let indice = params['index'];
      if(indice != -1){
        this.esEditar = true;
        this.usuario = this._usuariosService.getUsuario(indice)
      }else{
        this.esEditar = false;
      }
      });
   }


  ngOnInit() {
  }

}
