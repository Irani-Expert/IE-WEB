import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveFiltersComponent } from './responsive-filters.component';

describe('ResponsiveFiltersComponent', () => {
  let component: ResponsiveFiltersComponent;
  let fixture: ComponentFixture<ResponsiveFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveFiltersComponent]
    });
    fixture = TestBed.createComponent(ResponsiveFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
