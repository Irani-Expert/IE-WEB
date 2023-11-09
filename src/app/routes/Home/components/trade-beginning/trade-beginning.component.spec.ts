import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBeginningComponent } from './trade-beginning.component';

describe('TradeBeginningComponent', () => {
  let component: TradeBeginningComponent;
  let fixture: ComponentFixture<TradeBeginningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeBeginningComponent]
    });
    fixture = TestBed.createComponent(TradeBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
