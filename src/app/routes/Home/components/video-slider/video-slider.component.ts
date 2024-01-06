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
    'https://www.w3schools.com/html/mov_bbb.ogg',
    'https://www.w3schools.com/html/mov_bbb.ogg',
    'https://www.w3schools.com/html/mov_bbb.ogg',
    'https://www.w3schools.com/html/mov_bbb.ogg',
    'https://www.w3schools.com/html/mov_bbb.ogg',
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
