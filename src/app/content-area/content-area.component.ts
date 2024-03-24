import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import AlumnosJson from '../alumnos.json';
import { NgxPaginationModule } from 'ngx-pagination'; // Importa NgxPaginationModule


interface ALUMNOS {
  id: Number;
  nombre: String;
  apellido: String;
  telefono: String;
  email: String;
  activo: boolean;
}

@Component({
  selector: 'app-content-area',
  standalone: true,
  imports: [CommonModule,
    NgxPaginationModule],
  templateUrl: './content-area.component.html',
  styleUrl: './content-area.component.scss'
})

export class ContentAreaComponent {
  alumnos: ALUMNOS[] = AlumnosJson;

  // Pagina inicial
  p: number = 1;

  // Cantidad de elementos por página
  pageSize: number = 8;

  constructor(){
    console.log(this.alumnos);
  }
}
