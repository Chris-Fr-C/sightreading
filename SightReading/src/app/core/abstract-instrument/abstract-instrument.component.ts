import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ContextService } from 'src/app/shared/context.service';
import { GameManagerService } from 'src/app/shared/game-manager.service';

@Component({
  selector: 'app-abstract-instrument',
  templateUrl: './abstract-instrument.component.html',
  styleUrls: ['./abstract-instrument.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbstractInstrumentComponent implements OnInit {


  constructor(public context:ContextService, public game:GameManagerService) { }

  ngOnInit(): void {
  }

}
