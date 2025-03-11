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
  BreadcrumbItemIconDirective, BreadcrumbsComponent,
  BreadcrumbSeparatorComponent
} from '@elementar-ui/components/breadcrumbs';
import { IconComponent } from '@elementar-ui/components/icon';
import { ThemeManagerService } from '@elementar-ui/components/core';
import { LayoutApiService } from '@elementar-ui/components/layout';
import { Notification } from '@elementar-ui/components/notifications';

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
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    'class': 'block w-full h-full'
  }
})
export class HeaderComponent implements OnInit {
  protected _themeManager = inject(ThemeManagerService);
  protected _layoutApi = inject<any>(LayoutApiService);

  get currentUser(): any {
    return {
      displayName: 'Pavel Salauyou',
      email: 'elementarlabs@gmail.com',
      photoURL: ''
    };
  }

  notifications: Notification[] = [
    {
      actor: {
        id: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: 'assets/avatars/1.svg'
      },
      notifier: {
        id: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: 'assets/avatars/2.svg'
      },
      payload: {
        content: 'what did you say?'
      },
      type: 'mentionedInComment',
      createdAt: '1 hour ago'
    },
    {
      actor: {
        id: 3,
        name: 'Johnny Gladden',
        username: 'johnny.gladden',
        avatarUrl: 'assets/avatars/3.svg'
      },
      notifier: {
        id: 4,
        name: 'Angela Naylor',
        username: 'angela.naylor',
        avatarUrl: 'assets/avatars/4.svg'
      },
      payload: {
        folderName: 'My New Project'
      },
      type: 'inviteToEditFilesInFolder',
      createdAt: '2 hours ago'
    }
  ];

  ngOnInit() {
  }

  toggleSidebar(): void {
    this._layoutApi.toggleSidebar('root');
  }
}
