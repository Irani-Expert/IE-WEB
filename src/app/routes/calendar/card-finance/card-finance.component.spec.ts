import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFinanceComponent } from './card-finance.component';

describe('CardFinanceComponent', () => {
  let component: CardFinanceComponent;
  let fixture: ComponentFixture<CardFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFinanceComponent]
    });
    fixture = TestBed.createComponent(CardFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
