import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingArticleResponsiveComponent } from './landing-article-responsive.component';

describe('LandingArticleResponsiveComponent', () => {
  let component: LandingArticleResponsiveComponent;
  let fixture: ComponentFixture<LandingArticleResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingArticleResponsiveComponent]
    });
    fixture = TestBed.createComponent(LandingArticleResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
