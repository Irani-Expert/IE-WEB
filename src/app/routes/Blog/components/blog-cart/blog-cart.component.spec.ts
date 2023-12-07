import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCartComponent } from './blog-cart.component';

describe('BlogCartComponent', () => {
  let component: BlogCartComponent;
  let fixture: ComponentFixture<BlogCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCartComponent]
    });
    fixture = TestBed.createComponent(BlogCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
