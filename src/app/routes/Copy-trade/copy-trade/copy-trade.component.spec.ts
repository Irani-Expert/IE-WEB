import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyTradeComponent } from './copy-trade.component';

describe('CopyTradeComponent', () => {
  let component: CopyTradeComponent;
  let fixture: ComponentFixture<CopyTradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyTradeComponent]
    });
    fixture = TestBed.createComponent(CopyTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
