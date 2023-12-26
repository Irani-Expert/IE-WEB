import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesMoneyComponent } from './articles-money.component';

describe('ArticlesMoneyComponent', () => {
  let component: ArticlesMoneyComponent;
  let fixture: ComponentFixture<ArticlesMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesMoneyComponent]
    });
    fixture = TestBed.createComponent(ArticlesMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
