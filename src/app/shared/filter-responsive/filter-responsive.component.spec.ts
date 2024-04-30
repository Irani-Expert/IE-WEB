import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterResponsiveComponent } from './filter-responsive.component';

describe('FilterResponsiveComponent', () => {
  let component: FilterResponsiveComponent;
  let fixture: ComponentFixture<FilterResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterResponsiveComponent]
    });
    fixture = TestBed.createComponent(FilterResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
