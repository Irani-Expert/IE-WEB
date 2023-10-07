import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingArticleComponent } from './landing-article.component';

describe('LandingArticleComponent', () => {
  let component: LandingArticleComponent;
  let fixture: ComponentFixture<LandingArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingArticleComponent]
    });
    fixture = TestBed.createComponent(LandingArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
