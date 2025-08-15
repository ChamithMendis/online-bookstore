import { Routes } from '@angular/router';

export const routes: Routes = [
  // [TODO: To be added after auth implementation completes]
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    // canActivate: [AuthGaurd], // [TODO: To be added after auth implementation completes]
    loadChildren: () => import('./layout/main-layout.routes').then((m) => m.MAIN_LAYOUT_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
