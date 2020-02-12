import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CoreComponent } from './core/core.component';
import { AbstractInstrumentComponent } from './core/abstract-instrument/abstract-instrument.component';
import { ContextService } from './shared/context.service';
import { Router } from '@angular/router';
import { PianoComponent } from './core/piano/piano.component';
import { ViolinComponent } from './core/violin/violin.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoreComponent,
    AbstractInstrumentComponent,
    PianoComponent,
    ViolinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ContextService],
  bootstrap: [AppComponent],
  exports: [AbstractInstrumentComponent]
})
export class AppModule { }
