import { Component } from '@angular/core';

@Component({
  /* Para agregar codigo inline, no creamos template en archivo externo 
  template: `
  <h1>Listado de personas</h1>
  <app-persona></app-persona>
  <app-persona></app-persona>
  `, */
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
  /* styles:[`
    h1{
      color:blue;
    }
  `] */
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona'

  agregarPersona(){
    this.mensaje = 'Persona agregada';
  }
}
