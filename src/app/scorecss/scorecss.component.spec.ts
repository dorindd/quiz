import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecssComponent } from './scorecss.component';

describe('ScorecssComponent', () => {
  let component: ScorecssComponent;
  let fixture: ComponentFixture<ScorecssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorecssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
