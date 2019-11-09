import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from './registro/registro.component';
import {RegistroEstudiantesComponent} from './registro-estudiantes/registro-estudiantes.component';
const routes: Routes = [
  {path: '', redirectTo: 'registro'},
  {path: 'registro', component: RegistroEstudiantesComponent}
];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModuleEstudiantesModule { }
