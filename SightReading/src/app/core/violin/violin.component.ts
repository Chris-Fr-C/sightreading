import { Component, OnInit } from '@angular/core';
import { AbstractInstrumentComponent } from '../abstract-instrument/abstract-instrument.component';

@Component({
  selector: 'app-violin',
  templateUrl: './violin.component.html',
  styleUrls: ['./violin.component.css']
})
export class ViolinComponent extends AbstractInstrumentComponent implements OnInit {

  constructor() { 
    super();
  }


}
