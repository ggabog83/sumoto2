import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let VehiculosService = class VehiculosService {
    constructor() {
        this.vehiculos = [
            {
                marca: "Kawasaki",
                color: "amarillo",
                modelo: 2015,
                placa: "rxs187",
                usuario: " pedro infante",
                img: "assets/img/Kawasaki.jpg"
            },
            {
                marca: "Harley-Davidson",
                color: "negra",
                modelo: 2015,
                placa: "rxs157",
                usuario: "daniela grisales",
                img: "assets/img/Harley.jpg"
            },
            {
                marca: "KTM",
                color: "negra",
                modelo: 2020,
                placa: "rxs197",
                usuario: "daniela grisales",
                img: "assets/img/KTM.jpg"
            },
            {
                marca: "BMW",
                color: "negra",
                modelo: 2020,
                placa: "rxs197",
                usuario: "gabriel guevara a",
                img: "assets/img/BMW.jpg"
            },
        ];
    }
    getVehiculos() {
        return this.vehiculos;
    }
    getVehiculo(index) {
        return this.vehiculos[index];
    }
};
VehiculosService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], VehiculosService);
export { VehiculosService };
//# sourceMappingURL=vehiculos.service.js.map