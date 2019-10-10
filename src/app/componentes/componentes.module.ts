import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [HeaderComponent, LoginComponent, FooterComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [HeaderComponent, LoginComponent]

})
export class ComponentesModule { }
