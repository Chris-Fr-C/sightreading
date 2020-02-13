import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * This class intends to handle the "gamming" aspects. It will for instance indicate
 * what is the next note to show, it will aggregate the time spent by the user, the streak,
 * the game mode (with flat or not) ...
 */
export class GameManagerService {
  includeFlatNotes:boolean=true;
  times: number[];
  averageTime:number=0.0;

  constructor() { }

}
