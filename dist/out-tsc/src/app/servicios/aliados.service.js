import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AliadosService = class AliadosService {
    constructor() {
        this.aliados = [
            {
                nombre: "KMQ Motos",
                bio: "¿quiere una moto?vendemos motos nuevas y usadas, accesorios,taller,respuestos",
                img: "assets/img/kmqmotos_logo.png"
            },
            {
                nombre: "La tienda del motero",
                bio: "Somos el Concesionario de Motos Usadas Líder estamos cumpliendo con lo prometido desde nuestros inicios con altos estándares de calidad, servicio y respaldo",
                img: "assets/img/LOGOS-LTDM2-01.png"
            },
            {
                nombre: "service center ktm",
                bio: "el primer centro de servicio exclusivo de KTM, mecánica especializada en tu moto, la mejor atención y el mejor servicio.",
                img: "assets/img/taller ktm.jpg"
            },
            {
                nombre: "Yamaha Motor",
                bio: "Yamaha Motor es una empresa que crea emociones, transforma el sueño y enriquece la vida de las personas en todo el mundo, por medio de la sabiduría y la pasión, dispuesta a proporcionar siempre nuevas emociones.",
                img: "assets/img/taller yamaha.jpg"
            }
        ];
    }
    getAliados() {
        return this.aliados;
    }
};
AliadosService = tslib_1.__decorate([
    Injectable()
], AliadosService);
export { AliadosService };
//# sourceMappingURL=aliados.service.js.map