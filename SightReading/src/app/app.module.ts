import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractInstrumentComponent } from './core/abstract-instrument/abstract-instrument.component';
import { CoreComponent } from './core/core.component';
import { PianoComponent } from './core/piano/piano.component';
import { ViolinComponent } from './core/violin/violin.component';
import { MenuComponent } from './menu/menu.component';
import { ContextService } from './shared/context.service';
import { GameManagerService } from './shared/game-manager.service';
import { StaffComponent } from './core/staff/staff.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoreComponent,
    AbstractInstrumentComponent,
    PianoComponent,
    ViolinComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ContextService, GameManagerService],
  bootstrap: [AppComponent],
  exports: [AbstractInstrumentComponent]
})
export class AppModule { }
