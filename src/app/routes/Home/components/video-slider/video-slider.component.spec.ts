import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSliderComponent } from './video-slider.component';

describe('VideoSliderComponent', () => {
  let component: VideoSliderComponent;
  let fixture: ComponentFixture<VideoSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoSliderComponent]
    });
    fixture = TestBed.createComponent(VideoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
