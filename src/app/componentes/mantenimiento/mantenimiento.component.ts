import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../servicios/mantenimiento.service';
import { Router } from '@angular/router';
import { Mantenimiento } from 'src/app/modelos/mantenimiento';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})

export class MantenimientoComponent implements OnInit {

  mantenimientos: Mantenimiento[] = null;

  constructor(private _mantenimientoService: MantenimientoService
    , private _router: Router) { }

  ngOnInit() {

    this.getMantenimientos();
  }

  editarMantenimiento(id: string) {
    this._router.navigate(['mantenimiento_crear_editar', id]);
  }

  crearMantenimiento() {
    this._router.navigate(['mantenimiento_crear_editar', "-1"]);
  }

  eliminarMantenimiento(id: string, index: number) {
    Swal.fire({
      icon: "question",
      text: '¿Esta seguro que desea eliminar el mantenimiento?.',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this._mantenimientoService.eliminarMantenimiento(id).subscribe(res => {
          this.mantenimientos.splice(index, 1);
        });
      }
    });
  }

  private getMantenimientos() {
    this._mantenimientoService.getMantenimientos().subscribe(resp => {
      this.mantenimientos = resp;
    });
  }
}