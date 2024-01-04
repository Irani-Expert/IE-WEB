import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent {
  audio: any;
  gradient!: string;
  time_cricle_left: string = 'left: 13%';
  percentage: number = 1;
  audioDuration!: number;
  audioElement: any;
  isPlayed: boolean = false;
  ngOnInit(): void {
    this.audio = document.getElementsByTagName('audio')[0];
    this.gradient =
      ' background: linear-gradient( to right,rgb(61, 133, 140) 0%,  rgb(115, 115, 115) 2.91093%, rgb(115, 115, 115) 100%);';
  }

  pause_play() {
    this.isPlayed = !this.isPlayed;
    if (this.isPlayed) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
  test() {
    console.log('test');
  }
  handleClick(event: any) {
    if (this.audioElement != undefined) {
      const clickedM = event.offsetX;
      const totalWidth = event.target.clientWidth;
      this.audioElement.currentTime =
        (clickedM * this.audioDuration) / totalWidth;
    }
  }
  updateCurrentTime(event: Event) {
    this.audioElement = event.target as HTMLAudioElement;
    if (this.percentage < 100) {
      this.audioDuration = this.audioElement.duration;

      this.percentage =
        (this.audioElement.currentTime * 100) / this.audioDuration;
      this.time_cricle_left =
        'left:' + (13 + (this.percentage * 44.5) / 100) + '%';
      console.log(this.time_cricle_left);

      this.gradient =
        ' background: linear-gradient( to right,rgb(61, 133, 140) ' +
        this.percentage +
        '%,  rgb(115, 115, 115) 2.91093%, rgb(115, 115, 115) 100%);';
    }
  }
}
