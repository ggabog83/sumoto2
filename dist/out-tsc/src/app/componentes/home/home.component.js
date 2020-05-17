import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(_homeService) {
        this._homeService = _homeService;
        this.home = null;
    }
    ngOnInit() {
        this.home = this._homeService.getHome();
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map