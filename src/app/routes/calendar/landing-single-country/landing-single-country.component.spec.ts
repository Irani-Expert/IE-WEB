import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSingleCountryComponent } from './landing-single-country.component';

describe('LandingSingleCountryComponent', () => {
  let component: LandingSingleCountryComponent;
  let fixture: ComponentFixture<LandingSingleCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingSingleCountryComponent]
    });
    fixture = TestBed.createComponent(LandingSingleCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
