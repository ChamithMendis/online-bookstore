import { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout';
import { AllBooks } from '../features/all-books/all-books';
import { MainLayoutContent } from '../features/main-layout-content/main-layout-content';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: MainLayoutContent,
      },
      {
        path: 'all-books',
        component: AllBooks,
      },
    ],
  },
];
