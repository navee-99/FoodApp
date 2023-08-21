import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastcompComponent } from './breakfastcomp.component';

describe('BreakfastcompComponent', () => {
  let component: BreakfastcompComponent;
  let fixture: ComponentFixture<BreakfastcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakfastcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
