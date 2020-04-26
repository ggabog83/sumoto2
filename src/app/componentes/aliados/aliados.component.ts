import { Component, OnInit } from '@angular/core';
import{AliadosService,Aliados} from '../../servicios/aliados.service';

@Component({
  selector: 'app-aliados',
  templateUrl: './aliados.component.html',
  styleUrls: ['./aliados.component.css']
})
export class AliadosComponent implements OnInit {

  aliados:Aliados[]=[]
  
  constructor(private _aliadoService:AliadosService) { 

  }

  ngOnInit():void {
    this.aliados =this._aliadoService.getAliados();  
  }

}
