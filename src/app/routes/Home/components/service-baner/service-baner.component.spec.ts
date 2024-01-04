import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBanerComponent } from './service-baner.component';

describe('ServiceBanerComponent', () => {
  let component: ServiceBanerComponent;
  let fixture: ComponentFixture<ServiceBanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBanerComponent]
    });
    fixture = TestBed.createComponent(ServiceBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
