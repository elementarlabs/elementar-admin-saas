import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatIconButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { NotificationsPopoverComponent } from '../notifications-popover/notifications-popover.component';
import { RouterLink } from '@angular/router';
import { DicebearComponent } from '@elementar-ui/components/avatar';
import { PopoverTriggerForDirective } from '@elementar-ui/components/popover';
import { SoundEffectDirective } from '@elementar-ui/components/core';
import {
  BreadcrumbItemComponent,
  BreadcrumbItemIconDirective,
  BreadcrumbsComponent,
  BreadcrumbSeparatorComponent
} from '@elementar-ui/components/breadcrumbs';
import { IconComponent } from '@elementar-ui/components/icon';
import { LayoutApiService } from '@elementar-ui/components/layout';
import {
  ColorSchemeDarkDirective,
  ColorSchemeLightDirective,
  ColorSchemeSwitcherComponent
} from '@elementar-ui/components/color-scheme';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatIconButton,
    MatBadge,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    DicebearComponent,
    MatDivider,
    MatTooltip,
    PopoverTriggerForDirective,
    MatAnchor,
    SoundEffectDirective,
    NotificationsPopoverComponent,
    BreadcrumbItemIconDirective,
    BreadcrumbItemComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbsComponent,
    IconComponent,
    RouterLink,
    ColorSchemeDarkDirective,
    ColorSchemeLightDirective,
    ColorSchemeSwitcherComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    'class': 'block w-full h-full'
  }
})
export class HeaderComponent implements OnInit {
  protected _layoutApi = inject<any>(LayoutApiService);

  get currentUser(): any {
    return {
      displayName: 'Pavel Salauyou',
      email: 'elementarlabs@gmail.com',
      photoURL: ''
    };
  }

  ngOnInit() {
  }

  toggleSidebar(): void {
    this._layoutApi.toggleSidebar('root');
  }
}
