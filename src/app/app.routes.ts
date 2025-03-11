import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: 'login/check',
    loadComponent: () => import('./login-check/login-check.component').then(c => c.LoginCheckComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'logout',
    loadComponent: () => import('./logout/logout.component').then(c => c.LogoutComponent)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '',
    loadComponent: () => import('./common/common.component').then(c => c.CommonComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./main/main.component').then(c => c.MainComponent),
        title: 'Home'
      }
    ]
  },
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () => import('./error/not-found/not-found.component').then(c => c.NotFoundComponent)
  }
];
