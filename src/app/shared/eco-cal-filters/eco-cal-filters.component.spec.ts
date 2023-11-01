import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoCalFiltersComponent } from './eco-cal-filters.component';

describe('EcoCalFiltersComponent', () => {
  let component: EcoCalFiltersComponent;
  let fixture: ComponentFixture<EcoCalFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcoCalFiltersComponent]
    });
    fixture = TestBed.createComponent(EcoCalFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
