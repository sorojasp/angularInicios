import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalomaComponent } from './paloma/paloma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// módulos generados

import {ComponentesModule} from './componentes/componentes.module'
import {DocentesModule} from './docentes/docentes.module';
import {AdminModule} from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    PalomaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentesModule,
    DocentesModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
