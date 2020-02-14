import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolinComponent } from './violin.component';

describe('ViolinComponent', () => {
  let component: ViolinComponent;
  let fixture: ComponentFixture<ViolinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
