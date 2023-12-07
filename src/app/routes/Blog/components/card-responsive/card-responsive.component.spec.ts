import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResponsiveComponent } from './card-responsive.component';

describe('CardResponsiveComponent', () => {
  let component: CardResponsiveComponent;
  let fixture: ComponentFixture<CardResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardResponsiveComponent]
    });
    fixture = TestBed.createComponent(CardResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
