import { Injectable, EventEmitter } from '@angular/core';
import { Note, InstrumentMenu, AllNotes } from './instrument-variables';

@Injectable({
  providedIn: 'root'
})
/**
 * This class intends to handle the "gamming" aspects. It will for instance indicate
 * what is the next note to show, it will aggregate the time spent by the user, the streak,
 * the game mode (with flat or not) ...
 */
export class GameManagerService {
  includeFlatNotes: boolean = false;
  times: number[];
  averageTime: number = 0.0;
  eventNewNote: EventEmitter<Note>; // Emits a new note
  eventNoteCheck: EventEmitter<boolean>; // Returns the result of the verification for the current note
  currentNote: Note = null;
  onStreak: boolean = true;
  streakAmount: number = 0;

  constructor() {
    this.eventNewNote = new EventEmitter<Note>();
    this.eventNoteCheck = new EventEmitter<boolean>();
  }

  public askNewNote(instrument: InstrumentMenu) {
    let newNote = this.getRandomNote(this.includeFlatNotes, instrument)
    this.currentNote = newNote;
    this.eventNewNote.emit(newNote);
  }

  /**
   * Checks if the provided input note is correct and take required actions such as storing
   * the performance metrics.
   * Also emits the result in "eventNoteCheck"
   * @param inputNote note 
   * @param considerOctave if set to false, it will ignore the octave of the note
   * @returns the success of the operation. False if the note was wrong.
   */
  public checkNote(inputNote: Note, considerOctave: boolean): boolean {
    // null currentNote should have been handled before
    let success: boolean = false;
    if (considerOctave) {
      success = (inputNote.value == this.currentNote.value);
    } else {
      // %10 will also handle flat notes, which would not be the case using the first letter of the string
      success = ((inputNote.value % 10) == (this.currentNote.value % 10))
    }
    this.eventNoteCheck.emit(success);
    if (success){
      this.streakAmount ++;
    } else {
      this.streakAmount=0;
    }
    return success;
  }

  /**
   * Generates a random note in the instrument range of possible values.
   * 
   * @param includeFlatNote to include or not sharp notes
   * @param instrument in order to know the note range accepted by the instrument
   */
  protected getRandomNote(includeFlatNotes: boolean, instrument: InstrumentMenu): Note {
    let minNote: Note = instrument.notesRange[0];
    let maxNote: Note = instrument.notesRange[1];
    // This is not performant but will allow a better probability distribution
    let possibleNotes: Note[] = [];
    for (const note of AllNotes.notes) {
      if (note.value >= minNote.value && note.value <= maxNote.value) {
        // Double if for readability purposes but not optimized
        if (includeFlatNotes || (!includeFlatNotes && !note.isFlat)) {
          possibleNotes.push(note);
        }
      }
    }
    let pick: number = this.getRandomInteger(0, possibleNotes.length);
    return possibleNotes[pick];
  }



  /**
   * Generates a random integer.
   * Example :
   * getRandomInteger(1,3) can return x \in {1,2,3}
   * @param startIncluded Starting range (inculded)
   * @param endIncluded End range (included)
   */
  protected getRandomInteger(startIncluded: number, endIncluded: number): number {
    return Math.floor(Math.random() * (endIncluded - startIncluded)) + startIncluded;
  }


}
