import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'racao',
    loadChildren: () =>
      import('./features/racao/racao.module').then((m) => m.RacaoModule),
  },
  { path: '', redirectTo: 'racao', pathMatch: 'full' }, // Redireciona para 'racao' por padrão
];
