import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoregitComponent } from './scoregit.component';

describe('ScoregitComponent', () => {
  let component: ScoregitComponent;
  let fixture: ComponentFixture<ScoregitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoregitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoregitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
