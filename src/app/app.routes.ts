import{RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component'
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component'
import { TalleresComponent } from './componentes/talleres/talleres.component';
import { TallerCrearEditarComponent } from './componentes/talleres/taller-crear-editar/taller-crear-editar.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component'
import { VehiculoCrearEditarComponent } from './componentes/vehiculos/vehiculo-crear-editar/vehiculo-crear-editar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component'
import { UsuarioCrearEditarComponent } from './componentes/usuarios/usuario-crear-editar/usuario-crear-editar.component';
import { AliadosComponent } from './componentes/aliados/aliados.component';

const APP_ROUTES:Routes =[
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'mantenimiento',component:MantenimientoComponent},
    {path:'talleres',component:TalleresComponent},
    {path:'taller_crear_editar/:index',component:TallerCrearEditarComponent},   
    {path:'vehiculos',component:VehiculosComponent},
    {path:'vehiculo_crear_editar/:index',component:VehiculoCrearEditarComponent},    
    {path:'usuarios',component:UsuariosComponent},    
    {path:'usuario_crear_editar/:index',component:UsuarioCrearEditarComponent},    
    {path:'aliados',component:AliadosComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);