import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotTraderComponent } from './robot-trader.component';

describe('RobotTraderComponent', () => {
  let component: RobotTraderComponent;
  let fixture: ComponentFixture<RobotTraderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotTraderComponent]
    });
    fixture = TestBed.createComponent(RobotTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
