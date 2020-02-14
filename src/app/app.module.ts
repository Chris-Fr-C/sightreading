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
import { GuesserComponent } from './core/guesser/guesser.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoreComponent,
    PianoComponent,
    ViolinComponent,
    StaffComponent,
    GuesserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ContextService, GameManagerService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
