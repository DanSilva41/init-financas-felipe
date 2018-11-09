import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FinanceiroRoutingModule } from "./financeiro-routing.module";
import { VisualizacaoFinanceiraComponent } from "./visualizacao/visualizacao.component";

@NgModule({
    imports: [
      CommonModule,
      FinanceiroRoutingModule
    ],
    declarations: [VisualizacaoFinanceiraComponent]
  })
export class FinanceiroModule { }
