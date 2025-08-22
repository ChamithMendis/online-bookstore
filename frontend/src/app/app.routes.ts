import { Routes } from '@angular/router';
import { FrontPage } from './front-page/front-page';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  // [TODO: To be added after auth implementation completes]
  // {
  //   path: '',
  //   component: FrontPage,
  // },
  // {
  //   path: 'authentication',
  //   loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  // },
  {
    path: '',
    // component: MainLayout,
    // canActivate: [AuthGaurd], // [TODO: To be added after auth implementation completes]
    loadChildren: () => import('./layout/main-layout.routes').then((m) => m.MAIN_LAYOUT_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
