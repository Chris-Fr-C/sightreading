import { Injectable } from '@angular/core';
import { InstrumentMenu } from './instrument-menu';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  selectedInstrument:InstrumentMenu;
  constructor() { 
    this.selectedInstrument = null;
  }

  public setInstrument(instrument: InstrumentMenu){
    this.selectedInstrument = instrument;
  }
}
