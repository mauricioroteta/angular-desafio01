import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import AlumnosJson from '../../../assets/alumnos.json';
import { NgxPaginationModule } from 'ngx-pagination'; // Importa NgxPaginationModule


interface ALUMNOS {
  id: Number;
  nombre: String;
  apellido: String;
  telefono: String;
  email: String;
  activo: boolean;
  avatar: String;
}

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule,
    NgxPaginationModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})

export class alumnosComponent {
  alumnos: ALUMNOS[] = AlumnosJson;

  // Pagina inicial
  p: number = 1;

  // Cantidad de elementos por página
  pageSize: number = 6;

  constructor(){
    console.log(this.alumnos);
  }
}
