import { Component, OnInit } from "@angular/core";
import { FinanceiroService } from "../financeiro.service";

@Component({
    selector: 'app-visualizacao-financeira',
    templateUrl: './visualizacao.component.html',
    styleUrls: ['./visualizacao.component.css']
  })
  export class VisualizacaoFinanceiraComponent implements OnInit {

    entradas = [];

    constructor(private financeiroService: FinanceiroService) { }
    
      ngOnInit() {
        this.entradas = this.financeiroService.listarEntradas();
      }
      }

}
