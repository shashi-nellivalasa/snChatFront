import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'features' },
  {
    path: 'features',
    loadChildren: () => import('./features/features-module').then((m) => m.FeaturesModule),
  },
  { path: '**', redirectTo: 'features' },
];
