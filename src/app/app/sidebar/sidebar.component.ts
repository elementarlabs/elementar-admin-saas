import { Component, inject, OnInit, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import {
  SidebarBodyComponent,
  SidebarComponent as EmrSidebarComponent,
  SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent, SidebarNavItemIconDirective
} from '@elementar-ui/components/sidebar';
import { MatIconButton } from '@angular/material/button';
import { IconComponent } from '@elementar-ui/components/icon';
import { LayoutApiService } from '@elementar-ui/components/layout';
import { NavigationItem } from '@elementar-ui/components/navigation';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    SidebarBodyComponent,
    EmrSidebarComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    SidebarNavItemIconDirective,
    MatIconButton,
    IconComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: {
    'class': 'sidebar'
  }
})
export class SidebarComponent implements OnInit {
  private _layoutApi = inject(LayoutApiService);
  router = inject(Router);
  location = inject(Location);
  height: string | null = '200px';
  compact = false;

  readonly navigation = viewChild.required<any>('navigation');

  navItems: NavigationItem[] = [
    {
      key: 'home',
      type: 'link',
      name: 'Home',
      icon: 'ph:house-duotone',
      link: '/'
    },
    {
      key: 'item-menu-1',
      type: 'item',
      name: 'Item menu 1',
    },
    {
      key: 'item-menu-2',
      type: 'item',
      name: 'Item menu 2',
    },
    {
      key: 'divider',
      type: 'divider'
    },
    {
      key: 'item-menu-3',
      type: 'item',
      name: 'Item menu 3',
    },
    {
      key: 'item-menu-4',
      type: 'item',
      name: 'Item menu 4',
    },
  ];
  navItemLinks: NavigationItem[] = [];
  footerNavItems: NavigationItem[] = [
    {
      key: 'help',
      type: 'link',
      name: 'Help Center',
      icon: 'ph:question-duotone',
      link: '/help'
    },
    {
      key: 'docs',
      type: 'link',
      name: 'Documentation',
      icon: 'ph:lifebuoy-duotone',
      link: '/docs'
    },
  ];
  activeKey: any = 'home';

  ngOnInit() {
    this.navItems.forEach(navItem => {
      this.navItemLinks.push(navItem);

      if (navItem.children) {
        this.navItemLinks = this.navItemLinks.concat(navItem.children as NavigationItem[]);
      }
    });
    this._activateLink();
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this._activateLink();
      })
    ;
  }

  toggleSidebar(): void {
    this._layoutApi.toggleSidebar('root');
  }

  private _activateLink() {
    const activeLink = this.navItemLinks.find(
      navItem =>
        navItem.link === this.location.path() ||
        navItem.link === '/' && this.location.path() === ''
    );

    if (activeLink) {
      this.activeKey = activeLink.key;
    } else {
      this.activeKey = null;
    }
  }
}
