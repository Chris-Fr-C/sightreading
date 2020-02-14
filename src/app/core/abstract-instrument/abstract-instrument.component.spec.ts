import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractInstrumentComponent } from './abstract-instrument.component';

describe('AbstractInstrumentComponent', () => {
  let component: AbstractInstrumentComponent;
  let fixture: ComponentFixture<AbstractInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
