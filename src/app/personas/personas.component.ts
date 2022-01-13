import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  /* Para agregar codigo inline, no creamos template en archivo externo 
    template: `
    <h1>Listado de personas</h1>
    <app-persona></app-persona>
    <app-persona></app-persona>
  `, */
  templateUrl: './personas.component.html',
  styles:[`
    h1{
      color:blue;
    }
  `]
  //styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  deshabilitar = false;
}
