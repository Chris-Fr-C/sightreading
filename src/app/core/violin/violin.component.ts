import { Component, OnInit } from '@angular/core';
import { AbstractInstrumentComponent } from '../abstract-instrument/abstract-instrument.component';
import { ContextService } from 'src/app/shared/context.service';
import { GameManagerService } from 'src/app/shared/game-manager.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-violin',
  templateUrl: './violin.component.html',
  styleUrls: ['./violin.component.css']
})
export class ViolinComponent extends AbstractInstrumentComponent implements OnInit {

  constructor(context: ContextService, game: GameManagerService, sanitizer:DomSanitizer) {
    super(context, game, sanitizer);
  }


}
