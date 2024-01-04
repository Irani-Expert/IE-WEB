import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandigMoneyMComponent } from './landig-money-m.component';

describe('LandigMoneyMComponent', () => {
  let component: LandigMoneyMComponent;
  let fixture: ComponentFixture<LandigMoneyMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandigMoneyMComponent]
    });
    fixture = TestBed.createComponent(LandigMoneyMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
