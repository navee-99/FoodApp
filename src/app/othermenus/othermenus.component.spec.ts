import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthermenusComponent } from './othermenus.component';

describe('OthermenusComponent', () => {
  let component: OthermenusComponent;
  let fixture: ComponentFixture<OthermenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthermenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthermenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
