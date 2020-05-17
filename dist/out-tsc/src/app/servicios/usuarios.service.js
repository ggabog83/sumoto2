import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UsuariosService = class UsuariosService {
    constructor() {
        this.tiposUsuario = [
            { nombre: "cliente" },
            { nombre: "mecanico" }
        ];
        this.usuarios = [
            {
                nombre: "juan gabriel",
                direccion: "Carrera 24 B # 29-01",
                telefono: 3217771657,
                correo: "ggabog83@gmail.com",
                tipoUsuario: "mecanico",
                taller: "Taller JJ Motos",
                pasword: '1'
            },
            {
                nombre: "juan alzare",
                direccion: "Carrera 24 B # 29-01",
                telefono: 3217771657,
                correo: "ggabog83@gmail.com",
                tipoUsuario: "mecanico",
                taller: "Taller Moto - Mix",
                pasword: '1'
            },
            {
                nombre: "daniela grisales",
                direccion: "Cra. 25 ##28-40",
                telefono: 8914446,
                correo: "ggabog83@gmail.com",
                tipoUsuario: "cliente",
                taller: "Taller Moto - Mix",
                pasword: '1'
            },
            {
                nombre: "pedro infante",
                direccion: "Cra. 23 #39-39",
                telefono: 3113077981,
                correo: "ggabog83@gmail.com",
                tipoUsuario: "cliente",
                taller: "Juanchos Motos",
                pasword: '1'
            }
        ];
    }
    getUsuarios() {
        return this.usuarios;
    }
    getUsuario(index) {
        return this.usuarios[index];
    }
    getTiposUsuario() {
        return this.tiposUsuario;
    }
};
UsuariosService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UsuariosService);
export { UsuariosService };
//# sourceMappingURL=usuarios.service.js.map