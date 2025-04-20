import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacaoComponent } from './racao.component';

const routes: Routes = [{ path: '', component: RacaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacaoRoutingModule {}
