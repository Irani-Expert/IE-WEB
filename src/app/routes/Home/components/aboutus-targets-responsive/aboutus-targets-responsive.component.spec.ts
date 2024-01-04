import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusTargetsResponsiveComponent } from './aboutus-targets-responsive.component';

describe('AboutusTargetsResponsiveComponent', () => {
  let component: AboutusTargetsResponsiveComponent;
  let fixture: ComponentFixture<AboutusTargetsResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusTargetsResponsiveComponent]
    });
    fixture = TestBed.createComponent(AboutusTargetsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
