import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: 'estudiantes', loadChildren: './estudiantes/estudiantes.module#EstudiantesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
