import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingShopComponent } from './landing-shop.component';

describe('LandingShopComponent', () => {
  let component: LandingShopComponent;
  let fixture: ComponentFixture<LandingShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingShopComponent]
    });
    fixture = TestBed.createComponent(LandingShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
