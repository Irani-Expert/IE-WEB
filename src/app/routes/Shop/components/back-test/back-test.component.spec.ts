import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTestComponent } from './back-test.component';

describe('BackTestComponent', () => {
  let component: BackTestComponent;
  let fixture: ComponentFixture<BackTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackTestComponent]
    });
    fixture = TestBed.createComponent(BackTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
