import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { ContextService } from 'src/app/shared/context.service';
import { GameManagerService } from 'src/app/shared/game-manager.service';
import { Note } from 'src/app/shared/instrument-variables';
import { DomSanitizer } from '@angular/platform-browser';
import { notDeepStrictEqual } from 'assert';
@Component({
  selector: 'app-abstract-instrument',
  templateUrl: './abstract-instrument.component.html',
  styleUrls: ['./abstract-instrument.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbstractInstrumentComponent implements OnInit, AfterViewInit {
  public Note = Note; // NOTE: This is mandatory in order to use enums in the html

  // Sanitizer will be called in the html such as : sanitizer.bypassSecurityTrustResourceUrl(context.svgImage)
  constructor(public context: ContextService, public game: GameManagerService, public sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    // TODO: Remove staff and move notes
  }


  ngAfterViewInit(): void {

    // We must link each svg note to the corresponding click event.
    for (const note in Note) {
      // Initialy hiding the notes, waiting for the game manager to tell which note should be seen.
      if (Note.hasOwnProperty(note)) {
        let obj = document.getElementById(Note[note].toString());
        if (obj != null) {
          obj.style.display = "none";
        }
      }
    }

  }

  public onClickNote(noteName: Note) {
    console.log("Clicked on : " + noteName + " which corresponds to " + Note[noteName]);
  }

}
