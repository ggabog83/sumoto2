import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TalleresService } from 'src/app/servicios/talleres.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Taller } from 'src/app/modelos/taller.model';

@Component({
  selector: 'app-taller-crear-editar',
  templateUrl: './taller-crear-editar.component.html',
  styleUrls: ['./taller-crear-editar.component.css']
})
export class TallerCrearEditarComponent implements OnInit {

  taller = new Taller();
  esEditar: Boolean = false;
  mensajesError:any;

  constructor(private _activateRouter: ActivatedRoute, private _router: Router,
    private _talleresService: TalleresService) {
      this.mensajesError = _talleresService.getMensajesError();
    this._activateRouter.params.subscribe(params => {
      let id = params['id'];
      if (id != "-1") {
        this.esEditar = true;
        this._talleresService.getTaller(id).subscribe(resp => {
          this.taller = resp;
        });
      } else {
        this.esEditar = false;
      }
    });
  }

  ngOnInit() {
  }

  crearEditarTaller(formTaller: NgForm) {
    if (formTaller.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: 'Guardando...'
    });
    Swal.showLoading();

    let peticion = new Observable<any>();

    if (this.taller.id) {
      peticion = this._talleresService.actualizarTaller(this.taller);
    } else {
      peticion = this._talleresService.crearTaller(this.taller);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.taller.nombre,
        icon: "success",
        text: 'Se guardo correctamente'
      });
      this._router.navigate(['talleres']);
    });
  }
}