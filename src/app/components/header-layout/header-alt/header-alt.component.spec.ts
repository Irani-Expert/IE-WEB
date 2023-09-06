import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAltComponent } from './header-alt.component';

describe('HeaderAltComponent', () => {
  let component: HeaderAltComponent;
  let fixture: ComponentFixture<HeaderAltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAltComponent]
    });
    fixture = TestBed.createComponent(HeaderAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
