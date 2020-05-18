import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario-crear-editar',
  templateUrl: './usuario-crear-editar.component.html',
  styleUrls: ['./usuario-crear-editar.component.css']
})

export class UsuarioCrearEditarComponent implements OnInit {
  usuario = new Usuario();
  esEditar: Boolean = false;

  constructor(private _activateRouter: ActivatedRoute,
    private _usuariosService: UsuariosService) {

    this._activateRouter.params.subscribe(params => {
      let id = params['id'];
      if (id != -1) {
        this.esEditar = true;
        this._usuariosService.getUsuario(id).subscribe(resp => {
          this.usuario = resp;
        });
      } else {
        this.esEditar = false;
      }
    });
  }

  ngOnInit() {
  }

  crearEditarUsuario(formUsuario: NgForm) {
    if (formUsuario.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: 'Guardando...'
    });
    Swal.showLoading();

    let peticion = new Observable<any>();

    if (this.usuario.id) {
      peticion = this._usuariosService.actualizarUsuario(this.usuario);
    } else {
      peticion = this._usuariosService.crearUsuario(this.usuario);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.usuario.nombre,
        icon: "success",
        text: 'Se guardo correctamente'
      });
    });
  }
}
