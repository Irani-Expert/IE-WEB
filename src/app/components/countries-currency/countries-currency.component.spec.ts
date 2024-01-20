import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCurrencyComponent } from './countries-currency.component';

describe('CountriesCurrencyComponent', () => {
  let component: CountriesCurrencyComponent;
  let fixture: ComponentFixture<CountriesCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesCurrencyComponent]
    });
    fixture = TestBed.createComponent(CountriesCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
