import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMainPageComponent } from './calendar-main-page.component';

describe('CalendarMainPageComponent', () => {
  let component: CalendarMainPageComponent;
  let fixture: ComponentFixture<CalendarMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarMainPageComponent]
    });
    fixture = TestBed.createComponent(CalendarMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
