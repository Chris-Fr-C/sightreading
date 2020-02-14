import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesserComponent } from './guesser.component';

describe('GuesserComponent', () => {
  let component: GuesserComponent;
  let fixture: ComponentFixture<GuesserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuesserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
