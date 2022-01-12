import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorehtmlComponent } from './scorehtml.component';

describe('ScorehtmlComponent', () => {
  let component: ScorehtmlComponent;
  let fixture: ComponentFixture<ScorehtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorehtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorehtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
