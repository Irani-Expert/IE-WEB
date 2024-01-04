import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxArticlesComponent } from './box-articles.component';

describe('BoxArticlesComponent', () => {
  let component: BoxArticlesComponent;
  let fixture: ComponentFixture<BoxArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxArticlesComponent]
    });
    fixture = TestBed.createComponent(BoxArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
