import { Component, OnInit } from '@angular/core';
import { ContextService } from '../shared/context.service';
import { InstrumentType } from '../shared/instrument-variables';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  public typesEnum = InstrumentType; // NOTE: This is mandatory in order to use enums in the ngswitch

  constructor(public context:ContextService) { }

  ngOnInit(): void {
  }

}
