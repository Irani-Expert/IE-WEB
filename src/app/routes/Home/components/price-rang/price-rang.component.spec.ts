import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangComponent } from './price-rang.component';

describe('PriceRangComponent', () => {
  let component: PriceRangComponent;
  let fixture: ComponentFixture<PriceRangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceRangComponent]
    });
    fixture = TestBed.createComponent(PriceRangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
