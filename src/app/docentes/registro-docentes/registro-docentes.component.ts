import { Component, OnInit } from '@angular/core';
import {Usuarios} from './../../servicios/usuarios/usuariosService'
@Component({
  selector: 'app-registro-docentes',
  templateUrl: './registro-docentes.component.html',
  styleUrls: ['./registro-docentes.component.css']
})
export class RegistroDocentesComponent implements OnInit {
 private elPibe = true;
  private  visitantes = Usuarios;
  constructor() {

}

  ngOnInit() {
  }

}
