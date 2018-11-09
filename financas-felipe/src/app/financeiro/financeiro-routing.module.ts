import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { VisualizacaoFinanceiraComponent } from "./visualizacao/visualizacao.component";

const routes: Routes = [
    { path: '', component: VisualizacaoFinanceiraComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FinanceiroRoutingModule { }
