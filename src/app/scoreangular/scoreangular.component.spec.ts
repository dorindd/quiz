import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreangularComponent } from './scoreangular.component';

describe('ScoreangularComponent', () => {
  let component: ScoreangularComponent;
  let fixture: ComponentFixture<ScoreangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreangularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
