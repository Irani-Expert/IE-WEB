import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSmComponent } from './header-sm.component';

describe('HeaderSmComponent', () => {
  let component: HeaderSmComponent;
  let fixture: ComponentFixture<HeaderSmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSmComponent]
    });
    fixture = TestBed.createComponent(HeaderSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
