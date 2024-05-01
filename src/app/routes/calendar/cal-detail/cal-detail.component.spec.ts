import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDetailComponent } from './cal-detail.component';

describe('CalDetailComponent', () => {
  let component: CalDetailComponent;
  let fixture: ComponentFixture<CalDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalDetailComponent]
    });
    fixture = TestBed.createComponent(CalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
