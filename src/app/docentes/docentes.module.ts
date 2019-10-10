import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroDocentesComponent } from './registro-docentes/registro-docentes.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [RegistroDocentesComponent], // los componentes que pertenecen al módulo
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  exports: [RegistroDocentesComponent]
})
export class DocentesModule { }
