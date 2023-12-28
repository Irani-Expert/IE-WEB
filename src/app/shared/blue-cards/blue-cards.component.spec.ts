import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueCardsComponent } from './blue-cards.component';

describe('BlueCardsComponent', () => {
  let component: BlueCardsComponent;
  let fixture: ComponentFixture<BlueCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueCardsComponent]
    });
    fixture = TestBed.createComponent(BlueCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
