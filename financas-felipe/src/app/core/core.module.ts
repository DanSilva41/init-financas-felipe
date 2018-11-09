import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { ColorSettingsComponent } from "./color-settings/color-settings.component";
import { ChatComponent } from "./chat/chat.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
      NavbarComponent,
      TopbarComponent,
      ColorSettingsComponent,
      ChatComponent,
      FooterComponent
    ],
    exports: [
        NavbarComponent,
        TopbarComponent,
        ColorSettingsComponent,
        ChatComponent,
        FooterComponent
    ],
})
export class CoreModule {   }
