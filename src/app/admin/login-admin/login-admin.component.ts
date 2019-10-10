import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent  {

  private nombre = 'Aida Merlano';
  private nombreBoton = 'nombreBotón';
  constructor(

  ) { }



  public colocarNombre() {
    this.nombre = '***cambioNombre**';

  }

  public cambiaNonbreBoton() {
    this.nombreBoton = '8oct';
  }

}
