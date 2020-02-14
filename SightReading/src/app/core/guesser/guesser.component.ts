import { Component, OnInit } from '@angular/core';
import { AbstractInstrumentComponent } from '../abstract-instrument/abstract-instrument.component';
import { ContextService } from 'src/app/shared/context.service';
import { GameManagerService } from 'src/app/shared/game-manager.service';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * This component will allow the user to select a letter to detect the note, disregarding its octave
 */
@Component({
  selector: 'app-guesser',
  templateUrl: './guesser.component.html',
  styleUrls: ['./guesser.component.css']
})
export class GuesserComponent extends AbstractInstrumentComponent implements OnInit {

  constructor(context: ContextService, game: GameManagerService, sanitizer: DomSanitizer) {
    super(context, game, sanitizer);
  }

  ngOnInit(): void {
  }

}
