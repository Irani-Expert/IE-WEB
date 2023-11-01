import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoplaySliderComponent } from './autoplay-slider.component';

describe('AutoplaySliderComponent', () => {
  let component: AutoplaySliderComponent;
  let fixture: ComponentFixture<AutoplaySliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoplaySliderComponent]
    });
    fixture = TestBed.createComponent(AutoplaySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
