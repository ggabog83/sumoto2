import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../../servicios/mantenimiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mantenimiento } from 'src/app/modelos/mantenimiento';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mantenimiento-crear-editar',
  templateUrl: './mantenimiento-crear-editar.component.html',
  styleUrls: ['./mantenimiento-crear-editar.component.css']
})
export class MantenimientoCrearEditarComponent implements OnInit {

  mantenimiento = new Mantenimiento();
  esEditar: Boolean = false;

  constructor(private _activateRouter: ActivatedRoute, private _router: Router,
    private _mantenimientoService: MantenimientoService) {

    this._activateRouter.params.subscribe(params => {
      let id = params['id'];
      if (id != "-1") {
        this.esEditar = true;
        this._mantenimientoService.getMantenimiento(id).subscribe(resp => {
          this.mantenimiento = resp;
        });
      } else {
        this.esEditar = false;
      }
    });
  }

  ngOnInit() {
  }

  crearEditarMantenimiento(formMantenimiento: NgForm) {
    if (formMantenimiento.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: 'Guardando...'
    });
    Swal.showLoading();

    let peticion = new Observable<any>();

    if (this.mantenimiento.id) {
      peticion = this._mantenimientoService.actualizarMantenimiento(this.mantenimiento);
    } else {
      peticion = this._mantenimientoService.crearMantenimiento(this.mantenimiento);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.mantenimiento.vehiculo + "-" + this.mantenimiento.tipoMantenimiento,
        icon: "success",
        text: 'Se guardo correctamente'
      });
      this._router.navigate(['mantenimiento']);
    });
  }
}