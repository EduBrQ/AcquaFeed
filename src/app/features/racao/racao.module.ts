import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacaoRoutingModule } from './racao-routing.module';
import { RacaoComponent } from './racao.component';
import { RacaoTabelaComponent } from './pages/racao-tabela/racao-tabela.component';

import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    RacaoComponent, // Declarando o RacaoComponent
    RacaoTabelaComponent, // Declarando o RacaoTabelaComponent
  ],
  imports: [
    NgApexchartsModule,
    CommonModule,
    RacaoRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule, // Importando o módulo de paginação
    MatIconModule, // Importando o módulo de ícones
  ],
})
export class RacaoModule {}
