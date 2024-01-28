import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDescribtionComponent } from './calendar-describtion.component';

describe('CalendarDescribtionComponent', () => {
  let component: CalendarDescribtionComponent;
  let fixture: ComponentFixture<CalendarDescribtionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarDescribtionComponent]
    });
    fixture = TestBed.createComponent(CalendarDescribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
