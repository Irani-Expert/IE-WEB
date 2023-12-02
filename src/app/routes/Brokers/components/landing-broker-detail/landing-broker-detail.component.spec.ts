import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBrokerDetailComponent } from './landing-broker-detail.component';

describe('LandingBrokerDetailComponent', () => {
  let component: LandingBrokerDetailComponent;
  let fixture: ComponentFixture<LandingBrokerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingBrokerDetailComponent]
    });
    fixture = TestBed.createComponent(LandingBrokerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
