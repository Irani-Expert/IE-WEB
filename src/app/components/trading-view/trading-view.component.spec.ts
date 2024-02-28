import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingViewComponent } from './trading-view.component';

describe('TradingViewComponent', () => {
  let component: TradingViewComponent;
  let fixture: ComponentFixture<TradingViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TradingViewComponent]
    });
    fixture = TestBed.createComponent(TradingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
