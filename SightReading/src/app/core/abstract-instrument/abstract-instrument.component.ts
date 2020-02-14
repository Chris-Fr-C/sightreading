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

  }

  /**
   * Handles the clicking event of the user, interacting with the game manager. 
   * @param noteName 
   */
  public onClickNote(noteName: Note) {
    // TODO: Debug to delete
    console.log("Clicked on : " + noteName + " which corresponds to " + Note[noteName]);
  }


}
