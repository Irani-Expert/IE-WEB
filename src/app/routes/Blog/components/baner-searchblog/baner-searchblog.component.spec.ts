import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanerSearchblogComponent } from './baner-searchblog.component';

describe('BanerSearchblogComponent', () => {
  let component: BanerSearchblogComponent;
  let fixture: ComponentFixture<BanerSearchblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanerSearchblogComponent]
    });
    fixture = TestBed.createComponent(BanerSearchblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
