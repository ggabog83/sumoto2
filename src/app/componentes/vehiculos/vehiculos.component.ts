import { Component, OnInit } from '@angular/core';
import{VehiculosService, Vehiculo} from '../../servicios/vehiculos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos:Vehiculo[] = null;
  constructor(private _vehiculosService: VehiculosService
    ,private _router:Router) { }

  ngOnInit() {
    this.vehiculos = this._vehiculosService.getVehiculos();
  }

  editarVehiculo(index:number) 
  {
    this._router.navigate(['vehiculo_crear_editar', index]);
  }

  crearVehiculo(index:number) 
  {
    this._router.navigate(['vehiculo_crear_editar', index]);
  }

  eliminarVehiculo(index:number){
    alert("se va a eliminar un vehiculo.")
  }

}
