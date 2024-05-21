import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMailComponent } from './auth-mail.component';

describe('AuthMailComponent', () => {
  let component: AuthMailComponent;
  let fixture: ComponentFixture<AuthMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthMailComponent]
    });
    fixture = TestBed.createComponent(AuthMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
