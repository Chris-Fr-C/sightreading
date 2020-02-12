import { Component, OnInit } from '@angular/core';
import { InstrumentMenu } from '../shared/instrument-menu';
import { ContextService } from '../shared/context.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  LOGO_HEIGHT:number=90;
  LOGO_WIDTH:number=90;
  AVAILABLE_INSTRUMENTS: Array<InstrumentMenu> = [
    {name:"piano",iconImage:"../assets/images/icon_piano.svg",component:null},
    {name:"violin",iconImage:"../assets/images/icon_violin.svg",component:null},
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
