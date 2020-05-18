import { Component, OnInit } from '@angular/core';
import{AliadosService} from '../../servicios/aliados.service';
import { Aliados } from 'src/app/modelos/aliados.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aliados',
  templateUrl: './aliados.component.html',
  styleUrls: ['./aliados.component.css']
})
export class AliadosComponent implements OnInit {

  aliados:Aliados[];
  
  constructor(private _aliadoService:AliadosService) { 
  }

  ngOnInit():void {
   this.getAlidos();
  }

  public getAlidos(){
    this._aliadoService.getAliados().subscribe(resp =>{
      this.aliados = resp;
    });
   }
}
