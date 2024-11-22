import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'crear-avisos',
    loadComponent: () => import('./paginas/crear-avisos/crear-avisos.page').then( m => m.CrearAvisosPage)
  },
  {
    path: 'avisos',
    loadComponent: () => import('./paginas/avisos/avisos.page').then( m => m.AvisosPage)
  },
];
