import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCardResponsiveComponent } from './calendar-card-responsive.component';

describe('CalendarCardResponsiveComponent', () => {
  let component: CalendarCardResponsiveComponent;
  let fixture: ComponentFixture<CalendarCardResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarCardResponsiveComponent]
    });
    fixture = TestBed.createComponent(CalendarCardResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
