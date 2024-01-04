import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoCalComponent } from './eco-cal.component';

describe('EcoCalComponent', () => {
  let component: EcoCalComponent;
  let fixture: ComponentFixture<EcoCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcoCalComponent]
    });
    fixture = TestBed.createComponent(EcoCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
