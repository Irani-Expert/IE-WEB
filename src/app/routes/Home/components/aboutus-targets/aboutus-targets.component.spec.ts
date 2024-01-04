import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusTargetsComponent } from './aboutus-targets.component';

describe('AboutusTargetsComponent', () => {
  let component: AboutusTargetsComponent;
  let fixture: ComponentFixture<AboutusTargetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusTargetsComponent]
    });
    fixture = TestBed.createComponent(AboutusTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
