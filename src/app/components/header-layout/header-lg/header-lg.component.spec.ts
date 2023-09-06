import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLgComponent } from './header-lg.component';

describe('HeaderLgComponent', () => {
  let component: HeaderLgComponent;
  let fixture: ComponentFixture<HeaderLgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLgComponent]
    });
    fixture = TestBed.createComponent(HeaderLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
