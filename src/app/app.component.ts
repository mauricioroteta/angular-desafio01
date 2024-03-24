import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentAreaComponent } from "./content-area/content-area.component";
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ToolbarComponent, SidebarComponent, ContentAreaComponent, NgxPaginationModule]
})
export class AppComponent {
  title = 'desafio01';

}
