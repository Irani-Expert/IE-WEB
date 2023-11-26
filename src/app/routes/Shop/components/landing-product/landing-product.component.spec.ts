import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProductComponent } from './landing-product.component';

describe('LandingProductComponent', () => {
  let component: LandingProductComponent;
  let fixture: ComponentFixture<LandingProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingProductComponent]
    });
    fixture = TestBed.createComponent(LandingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
