import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusercompComponent } from './editusercomp.component';

describe('EditusercompComponent', () => {
  let component: EditusercompComponent;
  let fixture: ComponentFixture<EditusercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusercompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
