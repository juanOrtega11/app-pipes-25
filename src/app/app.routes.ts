import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/basic-page/basic-page'),
  },
  {
    path: 'custom',
    title: 'Pipes Custom',
    loadComponent: () => import('./pages/custom-page/custom-page'),
  },
  {
    path: 'default',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/default-page/default-page'),
  },
  {
    path: 'uncommon',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
