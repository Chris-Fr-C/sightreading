import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CoreComponent } from './core/core.component';
import { AbstractInstrumentComponent } from './core/abstract-instrument/abstract-instrument.component';
import { ContextService } from './shared/context.service';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoreComponent,
    AbstractInstrumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContextService],
  bootstrap: [AppComponent],
  exports: [AbstractInstrumentComponent]
})
export class AppModule { }
