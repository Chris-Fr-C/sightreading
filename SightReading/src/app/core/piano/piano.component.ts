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
  ERROR_CLASS_TAG: string = "error";
  MS_TO_HIDE_ERROR: number = 2000;

  constructor(context: ContextService, game: GameManagerService, sanitizer: DomSanitizer) {
    super(context, game, sanitizer);

    // Additionnal treatment on error
    this.game.eventNoteCheck.subscribe(
      (success: boolean) => {
        if (success) {

        } else {
          // Hilighting the expected note
          let expectedNote: Note = this.game.currentNote;
          // We must remove
          console.log("Trying to fetch " + "N" + expectedNote.name);
          let expectedSgvElem: HTMLElement = document.getElementById("N" + expectedNote.name);
          expectedSgvElem.classList.add(this.ERROR_CLASS_TAG);
          setTimeout(() => {
            expectedSgvElem.classList.remove(this.ERROR_CLASS_TAG);
          }, this.MS_TO_HIDE_ERROR)
        }
      }
    );

  }

}
