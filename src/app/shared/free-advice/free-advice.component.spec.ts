import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAdviceComponent } from './free-advice.component';

describe('FreeAdviceComponent', () => {
  let component: FreeAdviceComponent;
  let fixture: ComponentFixture<FreeAdviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeAdviceComponent]
    });
    fixture = TestBed.createComponent(FreeAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
