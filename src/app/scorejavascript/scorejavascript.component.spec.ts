import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorejavascriptComponent } from './scorejavascript.component';

describe('ScorejavascriptComponent', () => {
  let component: ScorejavascriptComponent;
  let fixture: ComponentFixture<ScorejavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorejavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorejavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
