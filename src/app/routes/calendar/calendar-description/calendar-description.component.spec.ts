import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDescriptionComponent } from './calendar-description.component';

describe('CalendarDescriptionComponent', () => {
  let component: CalendarDescriptionComponent;
  let fixture: ComponentFixture<CalendarDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarDescriptionComponent]
    });
    fixture = TestBed.createComponent(CalendarDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
