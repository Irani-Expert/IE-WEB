import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => void', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) VideoId!: number;
  @Input('Link') videoLink: string;

  constructor() {}
  video: any;
  vId!: string;
  videoCurrentTime: string = '00:00';
  pauseplay: boolean = false;
  percentage: number = 1;
  hidePuase: boolean = false;
  progressValue: number = 0;
  element: any;
  isFullScreen: boolean = false;
  progressbarLeft: string = 'calc(0%);';
  ngAfterViewInit() {}
  ngOnInit(): void {
    this.vId = 'vId' + this.VideoId;

    if (AppComponent.isBrowser.value) {
      this.element = document.getElementById('main-card');
    }
  }
  onTimeUpdate() {
    this.video = document.getElementById(this.vId);

    this.percentage = (this.video.currentTime / this.video.duration) * 100;

    this.progressbarLeft = this.percentage + '%';
    if (this.percentage > 0.2) {
      this.progressValue = this.percentage + 0.4;
    } else {
      this.progressValue = 0;
    }
    this.videoCurrentTime = this.video.currentTime;

    if (this.video.currentTime > this.video.duration - 0.2) {
      this.video.currentTime += 0.2;
      this.pauseplay = false;
      this.hidePuase = false;
      this.video.pause();
      this.progressbarLeft = '99%';
    }
    this.NumToTime(this.video.currentTime);
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

  changeVideoEvent(clickedWidth: number, totalWidth: number) {
    var per = (clickedWidth / totalWidth) * 100;
    per = per;

    this.video.currentTime = (this.video.duration / 100) * per;
  }
  puasePaceVideo() {
    this.video = document.getElementById(this.vId);
    this.pauseplay = !this.pauseplay;
    setTimeout(() => {
      this.hidePuase = !this.hidePuase;
      if (this.pauseplay) {
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
      this.isFullScreen = true;
    } else {
      document.exitFullscreen();
      this.isFullScreen = false;
    }
  }
}
