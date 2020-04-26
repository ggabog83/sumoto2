import { Component, OnInit } from '@angular/core';
import {Mantenimiento, MantenimientoService} from '../../../servicios/mantenimiento.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mantenimiento-crear-editar',
  templateUrl: './mantenimiento-crear-editar.component.html',
  styleUrls: ['./mantenimiento-crear-editar.component.css']
})
export class MantenimientoCrearEditarComponent implements OnInit {

  mantenimiento:Mantenimiento;
  esEditar:Boolean = false;

  constructor(private _activateRouter:ActivatedRoute,
    private _mantenimientoService:MantenimientoService) {
    this._activateRouter.params.subscribe(params=>{
      let indice = params['index'];
      if(indice != -1){
        this.esEditar = true;
        this.mantenimiento = this._mantenimientoService.getMantenimiento(indice)
      }else{
        this.esEditar = false;
      }
      });
   }

  ngOnInit() {
  }

}