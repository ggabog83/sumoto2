import { Injectable } from '@angular/core';
import { ServicioBaseService} from './servicio-base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AliadosService extends ServicioBaseService {

  colleccion = "aliados";

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAliados(){
    return super.obtenerTodo(this.colleccion);
  }
}

