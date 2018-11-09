import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { FinanceiroModule } from './financeiro/financeiro.module';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => DashboardModule},
  { path: 'financeiro', loadChildren: () => FinanceiroModule},

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
