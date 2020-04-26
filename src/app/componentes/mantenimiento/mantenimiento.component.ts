import { Component, OnInit } from '@angular/core';
import{MantenimientoService, Mantenimiento} from '../../servicios/mantenimiento.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})

export class MantenimientoComponent implements OnInit {

  mantenimientos:Mantenimiento[] = null;

  constructor(private _mantenimientoService: MantenimientoService
               ,private _router:Router) { }

  ngOnInit() {

    this.mantenimientos = this._mantenimientoService.getMantenimientos();
  }

  editarMantenimiento(index:number) 
  {
    this._router.navigate(['mantenimiento_crear_editar', index]);
  }

  crearMantenimiento(index:number) 
  {
    this._router.navigate(['mantenimiento_crear_editar', index]);
  }

  eliminarMantenimiento(index:number){
    alert("se va a eliminar un mantenimiento.")
  }
}