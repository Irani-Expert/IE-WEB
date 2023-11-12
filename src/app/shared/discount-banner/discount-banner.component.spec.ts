import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountBannerComponent } from './discount-banner.component';

describe('DiscountBannerComponent', () => {
  let component: DiscountBannerComponent;
  let fixture: ComponentFixture<DiscountBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountBannerComponent]
    });
    fixture = TestBed.createComponent(DiscountBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
