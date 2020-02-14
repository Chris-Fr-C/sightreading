import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../shared/context.service';
import { InstrumentMenu, InstrumentType, StaffType, Note } from '../shared/instrument-variables';
import { ViolinComponent } from '../core/violin/violin.component';

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  LOGO_HEIGHT:number=90;
  LOGO_WIDTH:number=90;
  AVAILABLE_INSTRUMENTS: Array<InstrumentMenu> = [
    {type:InstrumentType.PIANO, iconImage:"../assets/images/icon_piano.svg", staffType:StaffType.BOTH, notesRange:[Note.A2,Note.G6]},
    {type:InstrumentType.VIOLIN, iconImage:"../assets/images/icon_violin.svg", staffType: StaffType.HIGH, notesRange:[Note.C4,Note.G6]},
    {type:InstrumentType.GUESSER, iconImage:"../assets/images/icon_guesser.svg", staffType: StaffType.BOTH, notesRange:[Note.A2,Note.G6]},
  ];

  constructor(private context: ContextService, private router: Router) {}

  ngOnInit(): void {
  }

  onInstrumentSelected(instrument:InstrumentMenu): void {
    this.context.setInstrument(instrument);
    // Once the element is selected we leave the menu and go to the core object
    this.router.navigate(["/core"]); //TODO: put the links in some "constants" file
  }

}
