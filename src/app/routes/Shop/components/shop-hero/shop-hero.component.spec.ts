import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHeroComponent } from './shop-hero.component';

describe('ShopHeroComponent', () => {
  let component: ShopHeroComponent;
  let fixture: ComponentFixture<ShopHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopHeroComponent]
    });
    fixture = TestBed.createComponent(ShopHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
