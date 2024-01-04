import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMComponent } from './hero-m.component';

describe('HeroMComponent', () => {
  let component: HeroMComponent;
  let fixture: ComponentFixture<HeroMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroMComponent]
    });
    fixture = TestBed.createComponent(HeroMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
