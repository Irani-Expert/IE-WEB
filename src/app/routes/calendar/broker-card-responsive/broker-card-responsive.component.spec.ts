import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerCardResponsiveComponent } from './broker-card-responsive.component';

describe('BrokerCardResponsiveComponent', () => {
  let component: BrokerCardResponsiveComponent;
  let fixture: ComponentFixture<BrokerCardResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrokerCardResponsiveComponent]
    });
    fixture = TestBed.createComponent(BrokerCardResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
