import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private nombreButton = 'primerNombre';
private nombre = '';
private apellido = '';
private estadoCivil = '';
private alerta = '';
private usuario = {
nombre: '',
apellido: '',
estadoCivil: ''

};

private visibilidad = false;

  constructor() { }

  ngOnInit() {
  }


  public capturarDato() {
    this.nombreButton = 'nuevoNombre';
    console.log(`este es el nombre del que llena el formulario: ${this.nombre}`);

    // console.log(`nombre:${this.nombre}, apellido:${this.apellido}, estadoCivil:${this.estadoCivil}`);
    this.usuario.nombre = this.nombre;
    this.usuario.apellido = this.apellido;
    this.usuario.estadoCivil = this.estadoCivil;

    if (this.estadoCivil === 'FriendZoneado') {
      this.alerta = 'tienes huevo.... =(';

    }

    // console.log(`datoUsuario:${this.usuario}`);

    // this.visibilidad = !this.visibilidad;

  }


  public formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    this.apellido = value.toString();
    console.log(this.apellido);
    console.log(value.toString());
    console.log(this.nombre);
    return value;
  }

}




class Usuario {
constructor() {

}


}
