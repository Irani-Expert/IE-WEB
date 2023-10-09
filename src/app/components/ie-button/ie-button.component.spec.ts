import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeButtonComponent } from './ie-button.component';

describe('IeButtonComponent', () => {
  let component: IeButtonComponent;
  let fixture: ComponentFixture<IeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IeButtonComponent]
    });
    fixture = TestBed.createComponent(IeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
