import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/app/header/header.component';
import { SidebarComponent } from '@/app/sidebar/sidebar.component';
import { LayoutBodyComponent, LayoutComponent, LayoutSidebarComponent } from '@elementar-ui/components/layout';
import { PanelBodyComponent, PanelComponent, PanelHeaderComponent } from '@elementar-ui/components/panel';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutSidebarComponent,
    PanelBodyComponent,
    PanelComponent,
    PanelHeaderComponent
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent {

}
