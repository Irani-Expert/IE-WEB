import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBlogDetailComponent } from './landing-blog-detail.component';

describe('LandingBlogDetailComponent', () => {
  let component: LandingBlogDetailComponent;
  let fixture: ComponentFixture<LandingBlogDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingBlogDetailComponent]
    });
    fixture = TestBed.createComponent(LandingBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
