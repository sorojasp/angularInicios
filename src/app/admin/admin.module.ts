import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { GestionComponent } from './gestion/gestion.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [ GestionComponent, LoginAdminComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [GestionComponent, LoginAdminComponent]
})
export class AdminModule { }
