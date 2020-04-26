import { Component, OnInit } from '@angular/core';
import {Vehiculo, VehiculosService} from '../../../servicios/vehiculos.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-vehiculo-crear-editar',
  templateUrl: './vehiculo-crear-editar.component.html',
  styleUrls: ['./vehiculo-crear-editar.component.css']
})
export class VehiculoCrearEditarComponent implements OnInit {
  vehiculo:Vehiculo;
  esEditar:Boolean = false;

  constructor(private _activateRouter:ActivatedRoute,
    private _vehiculoService:VehiculosService) {
    this._activateRouter.params.subscribe(params=>{
      let indice = params['index'];
      if(indice != -1){
        this.esEditar = true;
        this.vehiculo = this._vehiculoService.getVehiculo(indice)
      }else{
        this.esEditar = false;
      }
      });
   }

  ngOnInit() {
  }

}
