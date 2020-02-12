import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-abstract-instrument',
  templateUrl: './abstract-instrument.component.html',
  styleUrls: ['./abstract-instrument.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbstractInstrumentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
