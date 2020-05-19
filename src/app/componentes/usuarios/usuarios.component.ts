import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { TiposUsuario } from 'src/app/modelos/tiposUsuario';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = null;
  tipoUsuarios: TiposUsuario[] = null;

  constructor(private _usuariosService: UsuariosService
    , private _router: Router) { }

  ngOnInit() {
    this.getTiposUsuario();
    this.getUsuarios();
  }

  editarUsuario(id: string) {
    this._router.navigate(['usuario_crear_editar', id]);
  }

  crearUsuario() {
    this._router.navigate(['usuario_crear_editar', "-1"]);
  }

  eliminarUsuario(id: string, index: number) {
    Swal.fire({
      icon: "question",
      text: '¿Esta seguro que desea eliminar el usuario?.',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this._usuariosService.eliminarUsuario(id).subscribe(res => {
          this.usuarios.splice(index, 1);
        });
      }
    });
  }

  private getTiposUsuario() {
    this._usuariosService.getUsuarios().subscribe(resp => {
      this.tipoUsuarios = resp;
    });
  }

  private getUsuarios() {
    this._usuariosService.getUsuarios().subscribe(resp => {
      this.usuarios = resp;
    });
  }
}
