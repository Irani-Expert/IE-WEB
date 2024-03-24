import { animate, style, transition, trigger } from '@angular/animations';
import { AbsoluteSourceSpan } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  // animations: [
  //   trigger('fade', [
  //     transition('* => void', [
  //       style({ opacity: 1, position: 'absolute', left: 0, right: 0 }),
  //       animate(500, style({ opacity: 0 })),
  //     ]),
  //   ]),
  // ],
})
export class VideoPlayerComponent implements OnInit {
  @Input({ required: true }) VideoId!: number;
  @Input('Link') videoLink: string;
  firstPlay: boolean = false;
  updateSliderToggle: boolean;

  constructor(private el: ElementRef) {}
  video: any;
  vId!: string;
  videoCurrentTime: string = '00:00';
  pauseplay: boolean = false;
  percentage: number = 1;
  hidePuase: boolean = false;
  progressValue: number = 0;
  element: any;
  isFullScreen: boolean = false;
  mousePosition: number;
  mouseDisplay: string;
  progressbarLeft: string = 'calc(0%);';

  aftermouseenter() {
    setInterval(() => {
      if (this.pauseplay) {
        this.mouseDisplay = 'none';
      }
    }, 8000);
  }
  aftermouseMoved() {
    this.mouseDisplay = 'auto';
  }

  onMouseMove(e: any) {
    console.log('e');
  }

  ngOnInit(): void {
    this.vId = 'vId' + this.VideoId;

    if (AppComponent.isBrowser.value) {
      this.element = document.getElementById('main-card');
    }
  }
  onTimeUpdate() {
    if (AppComponent.isBrowser.value && !isNaN(this.video.duration)) {
      this.video = document.getElementById(this.vId);

      this.percentage = (this.video.currentTime / this.video.duration) * 100;

      this.progressbarLeft = this.percentage + '%';
      if (this.percentage > 0.2) {
        this.progressValue = this.percentage + 0.8;
      } else {
        this.progressValue = 0;
      }
      this.videoCurrentTime = this.video.currentTime;

      if (this.video.currentTime > this.video.duration - 0.2) {
        this.video.currentTime = 0;
        this.pauseplay = false;
        this.hidePuase = false;
        this.video.pause();
        this.progressbarLeft = '99%';
      }
      this.NumToTime(this.video.currentTime);
    }
  }
  handleClick(event: any) {
    const clickedM = event.offsetX;
    const totalWidth = event.target.clientWidth;
    this.changeVideoEvent(clickedM, totalWidth);
  }
  dragFiunction(dr: any) {
    var dragW = dr.offsetX;
    var totalWidth = dr.target.clientWidth;

    if (0 < dragW && dragW <= totalWidth) {
      this.changeVideoEvent(dragW, totalWidth);
    }
  }
  startUpdateSlider() {
    this.updateSliderToggle = true;
  }

  endUpdateSlider() {
    this.updateSliderToggle = false;
  }

  updateSlider(event: any) {
    this.video = document.getElementById(this.vId);

    if (this.updateSliderToggle && true != isNaN(this.video.duration)) {
      this.percentage = Math.floor(
        (event.layerX / (event.target.offsetWidth - 3)) * 100
      );

      if (this.percentage > 100) {
        this.percentage = 100;
      } else if (this.percentage < 0) {
        this.percentage = 0;
      }

      this.video.currentTime = (this.video.duration / 100) * this.percentage;
      this.progressValue = this.percentage;
      this.progressbarLeft = this.percentage - 0.5 + '%';
    }
  }
  changeVideoEvent(clickedWidth: number, totalWidth: number) {
    var per = (clickedWidth / totalWidth) * 100;
    per = per;
    if (!isNaN(this.video.duration)) {
      this.video.currentTime = (this.video.duration / 100) * per;
    }
  }
  puasePaceVideo() {
    if (!this.firstPlay) this.firstPlay = true;
    debugger;
    this.video = document.getElementById(this.vId);
    this.pauseplay = !this.pauseplay;
    setTimeout(() => {
      this.hidePuase = !this.hidePuase;
      if (this.pauseplay && !isNaN(this.video.duration)) {
        this.video.play();
      } else {
        this.video.pause();
      }
    }, 100);
  }
  NumToTime(num: number) {
    var hours = String(Math.floor(num / 60));
    var minutes = String(Math.trunc(num % 60));
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    this.videoCurrentTime = hours + ':' + minutes;
  }

  fullScreen() {
    var vid = <HTMLVideoElement>document.getElementById('main' + this.vId);

    if (!this.isFullScreen) {
      vid.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  @HostListener('fullscreenchange', ['$event'])
  @HostListener('webkitfullscreenchange', ['$event'])
  @HostListener('mozfullscreenchange', ['$event'])
  @HostListener('MSFullscreenChange', ['$event'])
  FSHandler() {
    this.isFullScreen = !this.isFullScreen;
  }
}
