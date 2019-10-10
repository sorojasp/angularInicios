import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RegistroEstudiantesComponent } from './registro-estudiantes/registro-estudiantes.component';

@NgModule({
  declarations: [RegistroComponent, RegistroEstudiantesComponent],
  imports: [
    CommonModule
  ],
  exports: [RegistroComponent]
})
export class EstudiantesModule { }
