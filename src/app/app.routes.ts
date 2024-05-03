import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'main',
    title: 'Main',
    loadChildren: () =>
      import('./navbar/navbar.routes').then((route) => route.NavBarRoutes),
  },
  {
    path: 'signup',
    title: 'Signup',
    loadComponent: () =>
      import('./signup/signup.component').then((c) => c.SignupComponent),
  },
  {
    path: 'about',
    title: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'sidenav',
    title: 'sidenav',
    loadComponent: () =>
      import('./sidenav/sidenav.component').then((c) => c.SidenavComponent),
  },
];
