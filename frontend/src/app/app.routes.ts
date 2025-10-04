import { Routes } from '@angular/router';
import { FrontPage } from './front-page/front-page';
import { MainLayout } from './layout/main-layout/main-layout';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: FrontPage,
  },
  {
    path: 'authentication',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layout/main-layout.routes').then((m) => m.MAIN_LAYOUT_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
