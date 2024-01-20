import { Component } from '@angular/core';
// import { ICommentInfo } from '../comment-slider/comment-info';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss'],
})
export class VideoSliderComponent {
  upperSlide: number = 2;
  lowwerSlide: number = 0;
  lenCommentModel = [
    'https://dl.iraniexpert.com//uploads/images/videos/about-us/about-us1.mp4',
    'https://dl.iraniexpert.com//uploads/images/videos/about-us/about-us2.mp4',
    'https://dl.iraniexpert.com//uploads/images/videos/about-us/about-us3.mp4',
    'https://dl.iraniexpert.com//uploads/images/videos/about-us/about-us4.mp4'    
  ];
  slidDirection: boolean | null;

  sliderMovement(direction: boolean | null) {
    this.slidDirection = direction;
    if (direction && this.upperSlide <= this.lenCommentModel.length) {
      this.upperSlide += 2;
      this.lowwerSlide += 2;
    } else if (!direction && 2 <= this.lowwerSlide) {
      this.upperSlide -= 2;
      this.lowwerSlide -= 2;
    }
  }
}
