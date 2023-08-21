import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestpagechildComponent } from './guestpagechild.component';

describe('GuestpagechildComponent', () => {
  let component: GuestpagechildComponent;
  let fixture: ComponentFixture<GuestpagechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestpagechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestpagechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
