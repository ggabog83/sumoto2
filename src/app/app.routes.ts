import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component'
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component'
import { MantenimientoCrearEditarComponent } from './componentes/mantenimiento/mantenimiento-crear-editar/mantenimiento-crear-editar.component';
import { TalleresComponent } from './componentes/talleres/talleres.component';
import { TallerCrearEditarComponent } from './componentes/talleres/taller-crear-editar/taller-crear-editar.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component'
import { VehiculoCrearEditarComponent } from './componentes/vehiculos/vehiculo-crear-editar/vehiculo-crear-editar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component'
import { UsuarioCrearEditarComponent } from './componentes/usuarios/usuario-crear-editar/usuario-crear-editar.component';
import { AliadosComponent } from './componentes/aliados/aliados.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'mantenimiento', component: MantenimientoComponent, canActivate: [AuthGuard] },
    { path: 'mantenimiento_crear_editar/:id', component: MantenimientoCrearEditarComponent, canActivate: [AuthGuard] },
    { path: 'talleres', component: TalleresComponent, canActivate: [AuthGuard] },
    { path: 'taller_crear_editar/:id', component: TallerCrearEditarComponent, canActivate: [AuthGuard] },
    { path: 'vehiculos', component: VehiculosComponent, canActivate: [AuthGuard] },
    { path: 'vehiculo_crear_editar/:id', component: VehiculoCrearEditarComponent, canActivate: [AuthGuard] },
    { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
    { path: 'usuario_crear_editar/:id', component: UsuarioCrearEditarComponent, canActivate: [AuthGuard] },
    { path: 'aliados', component: AliadosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);