import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionShopComponent } from './question-shop.component';

describe('QuestionShopComponent', () => {
  let component: QuestionShopComponent;
  let fixture: ComponentFixture<QuestionShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionShopComponent]
    });
    fixture = TestBed.createComponent(QuestionShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
