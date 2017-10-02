import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AetButtonComponent } from './aet-button/aet-button.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { AetInputComponent } from './aet-input/aet-input.component';
import { AetCardComponent } from './aet-card/aet-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AetButtonComponent,
    TooltipDirective,
    AetInputComponent,
    AetCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
