import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'racao',
    loadChildren: () =>
      import('./features/racao/racao.module').then((m) => m.RacaoModule),
  },
  { path: '', redirectTo: 'racao', pathMatch: 'full' }, // Redireciona para 'racao' por padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
