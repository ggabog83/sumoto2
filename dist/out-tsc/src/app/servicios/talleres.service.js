import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let TalleresService = class TalleresService {
    constructor() {
        this.talleres = [
            {
                nombre: "Juanchos Motos",
                direccion: "Carrera 25 No. 24-50, Veles",
                telefono: 3146093139,
                img: "assets/img/juanchom.jpg"
            },
            {
                nombre: "Taller Moto - Mix",
                direccion: "Cra. 24 ##32-51",
                telefono: 3044019268,
                img: "assets/img/motomix.jpg"
            },
            {
                nombre: "Taller AKT Moto2",
                direccion: "Carrera 22 #16-39 Centro",
                telefono: 8820042,
                img: "assets/img/aktm.jpg"
            },
            {
                nombre: "Taller JJ Motos",
                direccion: "Cra. 25 #cl 27-45",
                telefono: 3022008831,
                img: "assets/img/taller yamaha.jpg"
            },
            {
                nombre: "Colo Motos",
                direccion: "Cl. 15 ##24-33",
                telefono: 3158751438,
                img: "assets/img/colo.jpg"
            },
            {
                nombre: "Moto repuestos H&M",
                direccion: "Cl. 15 #20-66",
                telefono: 3108903705,
                img: "assets/img/hm.jpg"
            }
        ];
    }
    getTalleres() {
        return this.talleres;
    }
    get(index) {
        return this.talleres[index];
    }
};
TalleresService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TalleresService);
export { TalleresService };
//# sourceMappingURL=talleres.service.js.map