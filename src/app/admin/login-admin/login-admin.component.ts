import { Component, OnInit } from '@angular/core';
import { visitAstChildren } from '@angular/compiler';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})




export class LoginAdminComponent  {

  private nombre = 'Aida Merlano';
  private visibilidad = true;
  private nombreBoton = 'nombreBotón';
  private fecha = new Date('1985-11-19');
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(

  ) { }



  public colocarNombre() {
    this.nombre = '***cambioNombre**';
    this.visibilidad = !this.visibilidad;

  }

  public cambiaNonbreBoton() {
    this.nombreBoton = '8oct';
  }

}
