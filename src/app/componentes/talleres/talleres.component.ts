import { Component, OnInit } from '@angular/core';
import{TalleresService, Taller} from '../../servicios/talleres.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})

export class TalleresComponent implements OnInit {
  talleres:Taller[] = null;
  
  constructor(private _talleresService: TalleresService
               ,private _router:Router) { }

  ngOnInit() {
    this.talleres = this._talleresService.getTalleres();
  }

  editarTaller(index:number) 
  {
    this._router.navigate(['taller_crear_editar', index]);
  }

  crearTaller(index:number) 
  {
    this._router.navigate(['taller_crear_editar', index]);
  }

  eliminarTaller(index:number){
    alert("se va a eliminar un taller.")
  }
}