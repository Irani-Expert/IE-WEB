import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramBanerComponent } from './instagram-baner.component';

describe('InstagramBanerComponent', () => {
  let component: InstagramBanerComponent;
  let fixture: ComponentFixture<InstagramBanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramBanerComponent]
    });
    fixture = TestBed.createComponent(InstagramBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
