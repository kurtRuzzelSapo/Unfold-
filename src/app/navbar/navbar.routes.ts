import { Routes } from '@angular/router';

export const NavBarRoutes: Routes = [
  {
    path: '',
    title: 'Main',
    loadComponent: () =>
      import('./navbar.component').then((c) => c.NavbarComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        title: 'Home Page',
        loadComponent: () =>
          import('../home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () =>
          import('../about/about.component').then((c) => c.AboutComponent),
      },
    ],
  },
];
