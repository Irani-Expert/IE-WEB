import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLinkComponent } from './card-link.component';

describe('CardLinkComponent', () => {
  let component: CardLinkComponent;
  let fixture: ComponentFixture<CardLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLinkComponent]
    });
    fixture = TestBed.createComponent(CardLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
