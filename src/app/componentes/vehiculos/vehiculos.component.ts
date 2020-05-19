import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Vehiculo } from 'src/app/modelos/vehiculo.model';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = null;

  constructor(private _vehiculosService: VehiculosService
    , private _router: Router) { }

  ngOnInit() {
    this.getVehiculos();
  }

  editarVehiculo(id: string) {
    this._router.navigate(['vehiculo_crear_editar', id]);
  }

  crearVehiculo(id: string) {
    this._router.navigate(['vehiculo_crear_editar', "-1"]);
  }

  eliminarVehiculo(id: string, index: number) {
    Swal.fire({
      icon: "question",
      text: '¿Esta seguro que desea eliminar el vehiculo?.',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this._vehiculosService.eliminarVehiculo(id).subscribe(res => {
          this.vehiculos.splice(index, 1);
        });
      }
    });
  }

  private getVehiculos() {
    this._vehiculosService.getVehiculos().subscribe(resp => {
      this.vehiculos = resp;
    });
  }
}