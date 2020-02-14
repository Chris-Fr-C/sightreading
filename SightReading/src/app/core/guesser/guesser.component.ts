import { Component, OnInit } from '@angular/core';
import { AbstractInstrumentComponent } from '../abstract-instrument/abstract-instrument.component';
import { ContextService } from 'src/app/shared/context.service';
import { GameManagerService } from 'src/app/shared/game-manager.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Note } from 'src/app/shared/instrument-variables';

/**
 * This component will allow the user to select a letter to detect the note, disregarding its octave
 */
@Component({
  selector: 'app-guesser',
  templateUrl: './guesser.component.html',
  styleUrls: ['./guesser.component.css']
})
export class GuesserComponent extends AbstractInstrumentComponent implements OnInit {
  ERROR_CLASS_TAG:string = "error";
  MS_TO_HIDE_ERROR:number = 2000;

  constructor(context: ContextService, game: GameManagerService, sanitizer: DomSanitizer) {
    super(context, game, sanitizer);

    // Additionnal treatment on error
    this.game.eventNoteCheck.subscribe(
      (success:boolean)=>{
        if (success){

        } else {
          // Hilighting the expected note
          let expectedNote:Note = this.game.currentNote;
          // We must remove
          let expectedSgvElem:HTMLElement = document.getElementById("N"+expectedNote.name.replace(/[0-9]/g, ''));
          expectedSgvElem.classList.add(this.ERROR_CLASS_TAG);
          setTimeout(()=>{
            expectedSgvElem.classList.remove(this.ERROR_CLASS_TAG);
          },this.MS_TO_HIDE_ERROR)
        }
      }
    );

  }

  ngOnInit(): void {
  }

}
