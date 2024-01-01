import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexScollComponent } from './forex-scoll.component';

describe('ForexScollComponent', () => {
  let component: ForexScollComponent;
  let fixture: ComponentFixture<ForexScollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForexScollComponent]
    });
    fixture = TestBed.createComponent(ForexScollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
