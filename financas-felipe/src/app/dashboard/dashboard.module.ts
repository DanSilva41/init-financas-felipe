import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { IndexComponent } from "./index/index.component";

@NgModule({
    imports: [
      CommonModule,
  
      DashboardRoutingModule
    ],
    declarations: [IndexComponent]
  })
export class DashboardModule { }
