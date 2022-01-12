import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string = 'Juan';
  apellido: string = 'Perez';
  /* private edad: number = 28; */
  edad: number = 28;

  /* Si queremos acceder a una variable privada debemos usar un método 
  getEdad():number{
    return this.edad;
  }
  */
}
