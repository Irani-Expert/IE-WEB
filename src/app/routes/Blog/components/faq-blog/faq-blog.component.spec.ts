import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBlogComponent } from './faq-blog.component';

describe('FaqBlogComponent', () => {
  let component: FaqBlogComponent;
  let fixture: ComponentFixture<FaqBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqBlogComponent]
    });
    fixture = TestBed.createComponent(FaqBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
