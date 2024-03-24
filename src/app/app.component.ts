import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { alumnosComponent } from "./alumnos/alumnos.component";
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ToolbarComponent, SidebarComponent, alumnosComponent, NgxPaginationModule]
})
export class AppComponent {
  title = 'desafio01';

}
