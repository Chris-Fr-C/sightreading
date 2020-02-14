import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ContextService } from 'src/app/shared/context.service';
import { GameManagerService } from 'src/app/shared/game-manager.service';
import { Note, AllNotes, InstrumentType, InstrumentMenu } from 'src/app/shared/instrument-variables';
@Component({
  selector: 'app-abstract-instrument',
  templateUrl: './abstract-instrument.component.html',
  styleUrls: ['./abstract-instrument.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class AbstractInstrumentComponent implements OnInit, AfterViewInit {

  // Sanitizer will be called in the html such as : sanitizer.bypassSecurityTrustResourceUrl(context.svgImage)
  constructor(public context: ContextService, public game: GameManagerService, public sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    // TODO: Remove staff and move notes
  }


  ngAfterViewInit(): void {
    this.game.askNewNote(this.context.getInstrument());
  }

  /**
   * Handles the clicking event of the user, interacting with the game manager. 
   * @param noteName 
   */
  public onClickNote(noteName: string) {
    // TODO: Debug to delete
    let note: Note = AllNotes.getNote(noteName);
    if (note!=null){
      this.game.checkNote(note, true);
    }
    // If note is null it means it's one of the notes we haven't implemented yet
  }

  /**
   * Handles the clicking event of the user. It interacts with the game manager but it will ignore
   * the pitch of the note. Useful for the guesser mode
   * @param noteName 
   */
  public onClickNoteAnyScale(noteName: string){
    let note: Note = AllNotes.getNote(noteName);
    this.game.checkNote(note, false);
  }

}
