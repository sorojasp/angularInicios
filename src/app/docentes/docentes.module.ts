import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroDocentesComponent } from './registro-docentes/registro-docentes.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ComponentesModule} from './../componentes/componentes.module';
@NgModule({
  declarations: [RegistroDocentesComponent], // los componentes que pertenecen al módulo
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    ComponentesModule
  ],
  exports: [RegistroDocentesComponent]
})
export class DocentesModule { }
