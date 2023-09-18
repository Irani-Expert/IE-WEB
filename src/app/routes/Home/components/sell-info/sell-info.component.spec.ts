import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellInfoComponent } from './sell-info.component';

describe('SellInfoComponent', () => {
  let component: SellInfoComponent;
  let fixture: ComponentFixture<SellInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellInfoComponent]
    });
    fixture = TestBed.createComponent(SellInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
