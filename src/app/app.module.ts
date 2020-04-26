import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//servicio
import{AliadosService} from './servicios/aliados.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './componentes/shared/header/header.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { AliadosComponent } from './componentes/aliados/aliados.component';
import { TalleresComponent } from './componentes/talleres/talleres.component';
import { LoginComponent } from './componentes/login/login.component'
import { APP_ROUTING } from './app.routes';
import {NgForm} from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component';
import { UsuarioCrearEditarComponent } from './componentes/usuarios/usuario-crear-editar/usuario-crear-editar.component';
import { VehiculoCrearEditarComponent } from './componentes/vehiculos/vehiculo-crear-editar/vehiculo-crear-editar.component';
import { TallerCrearEditarComponent } from './componentes/talleres/taller-crear-editar/taller-crear-editar.component';
import { MantenimientoCrearEditarComponent } from './componentes/mantenimiento/mantenimiento-crear-editar/mantenimiento-crear-editar.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AliadosComponent,
    TalleresComponent,
    LoginComponent,
    NgForm,
    HomeComponent,
    UsuariosComponent,
    MantenimientoComponent,
    VehiculosComponent,
    UsuarioCrearEditarComponent,
    VehiculoCrearEditarComponent,
    TallerCrearEditarComponent,
    MantenimientoCrearEditarComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    AliadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
