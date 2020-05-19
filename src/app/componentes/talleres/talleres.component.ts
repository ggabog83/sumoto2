import { Component, OnInit } from '@angular/core';
import { TalleresService } from '../../servicios/talleres.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Taller } from 'src/app/modelos/taller.model';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})

export class TalleresComponent implements OnInit {
  talleres: Taller[] = null;

  constructor(private _talleresService: TalleresService
    , private _router: Router) { }

  ngOnInit() {
    this.getTalleres();
  }

  editarTaller(id: string) {
    this._router.navigate(['taller_crear_editar', id]);
  }

  crearTaller() {
    this._router.navigate(['taller_crear_editar', "-1"]);
  }

  eliminarTaller(id: string, index: number) {
    Swal.fire({
      icon: "question",
      text: '¿Esta seguro que desea eliminar el taller?.',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this._talleresService.eliminarTaller(id).subscribe(res => {
          this.talleres.splice(index, 1);
        });
      }
    });
  }

  private getTalleres() {
    this._talleresService.getTalleres().subscribe(resp => {
      this.talleres = resp;
    });
  }
}