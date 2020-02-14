import { Injectable } from '@angular/core';
import { InstrumentMenu } from './instrument-variables';
@Injectable({
  providedIn: 'root'
})
export class ContextService {
  selectedInstrument:InstrumentMenu;
  svgImage:string;

  constructor() { 
    this.selectedInstrument = null;
    this.svgImage = "../assets/images/staff.svg";
  }

  public setInstrument(instrument: InstrumentMenu){
    this.selectedInstrument = instrument;
  }

  public getInstrument():InstrumentMenu{
    return this.selectedInstrument;
  }

  public isInstrumentSelected():boolean{
    return this.selectedInstrument!=null;
  }
}
