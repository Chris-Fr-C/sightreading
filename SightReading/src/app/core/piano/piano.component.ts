import { Component, OnInit } from '@angular/core';
import { AbstractInstrumentComponent } from '../abstract-instrument/abstract-instrument.component';
import { ContextService } from 'src/app/shared/context.service';
import { GameManagerService } from 'src/app/shared/game-manager.service';
import { Note } from 'src/app/shared/instrument-variables';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent extends AbstractInstrumentComponent implements OnInit {

  constructor(context: ContextService, game: GameManagerService, sanitizer:DomSanitizer) {
    super(context, game, sanitizer);
  }

}
