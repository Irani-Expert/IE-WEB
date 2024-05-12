import { Component } from '@angular/core';
// import { ICommentInfo } from '../comment-slider/comment-info';
interface videoInfo {
  title: string;
  name: string;
  link: string;
}
@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss'],
})
export class VideoSliderComponent {
  upperSlide: number = 2;
  lowwerSlide: number = 0;
  lenCommentModel: videoInfo[] = [
    {
      title: '150,000 35% در ۳۵ روز',
      name: 'قربانی',
      link: 'https://dl.iraniexpert.com//uploads/images/videos/about-us/about-us1.mp4',
    },
    {
      title: '10,000 1,5% در یک هفته',
      name: 'مختاری',
      link: 'https://dl.iraniexpert.com//uploads/images/videos/about-us/about-us2.mp4',
    },
    {
      title: '30,000 1,5% در یک هفته',
      name: 'پاسبان',
      link: 'https://dl.iraniexpert.com//uploads/images/videos/about-us/about-us3.mp4',
    },
    {
      title: '50,000 2% در یک هفته',
      name: 'تالکین',
      link: 'https://dl.iraniexpert.com//uploads/images/videos/about-us/about-us4.mp4',
    },
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
