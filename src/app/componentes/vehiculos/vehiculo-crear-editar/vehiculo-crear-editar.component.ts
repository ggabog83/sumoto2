import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../../servicios/vehiculos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/modelos/vehiculo.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehiculo-crear-editar',
  templateUrl: './vehiculo-crear-editar.component.html',
  styleUrls: ['./vehiculo-crear-editar.component.css']
})
export class VehiculoCrearEditarComponent implements OnInit {
  vehiculo = new Vehiculo();
  esEditar: Boolean = false;

  constructor(private _activateRouter: ActivatedRoute, private _router: Router,
    private _vehiculoService: VehiculosService) {
    this._activateRouter.params.subscribe(params => {
      let id = params['id'];
      if (id != -1) {
        this.esEditar = true;
        this._vehiculoService.getVehiculo(id).subscribe(resp => {
          this.vehiculo = resp;
        });
      } else {
        this.esEditar = false;
      }
    });
  }
  ngOnInit() {
  }

  crearEditarVehiculo(formVehiculo: NgForm) {
    if (formVehiculo.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: 'Guardando...'
    });
    Swal.showLoading();

    let peticion = new Observable<any>();

    if (this.vehiculo.id) {
      peticion = this._vehiculoService.actualizarVehiculo(this.vehiculo);
    } else {
      peticion = this._vehiculoService.crearVehiculo(this.vehiculo);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.vehiculo.placa,
        icon: "success",
        text: 'Se guardo correctamente'
      });
      this._router.navigate(['vehiculos']);
    });
  }
}