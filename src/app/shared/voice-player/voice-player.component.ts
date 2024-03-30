import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { timeconvert } from '../../../ts/NumToTime';
@Component({
  selector: 'app-voice-player',
  templateUrl: './voice-player.component.html',
  styleUrls: ['./voice-player.component.scss'],
})
export class VoicePlayerComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @ViewChild('progressBar', { static: false }) progressBar!: ElementRef;
  @Input() audioSource: string;

  dotMovement: string = ' -0px';
  time: string = '0:00';
  Pause_Play: boolean = false;
  speedNum: number = 1;
  // audioSource: string =
  //   'https://www.honarist.com/wp-content/uploads/2021/08/Gloomy-Sunday-Billie-Holiday-128.mp3';
  isplayed: boolean = false;
  playAudio() {
    this.Pause_Play = !this.Pause_Play;
    if (this.isplayed) {
      this.audioPlayer.nativeElement.pause();
    } else {
      this.audioPlayer.nativeElement.play();
    }
    this.isplayed = !this.isplayed;
  }

  updateProgress() {
    const convertTime = new timeconvert();
    const audio = this.audioPlayer.nativeElement;
    const progress = this.progressBar.nativeElement;
    const value = (audio.currentTime / audio.duration) * 100;

    progress.value = value;
    let dotvalue = ((progress.offsetWidth - 3.5) * value) / 100;

    this.dotMovement = dotvalue.toString() + 'px';
    this.time = convertTime.NumToTime(Math.round(audio.currentTime));
  }

  initializeProgressBar() {
    const audio = this.audioPlayer.nativeElement;
    const progress = this.progressBar.nativeElement;
    progress.max = audio.duration;
  }

  seekToPosition(event: MouseEvent) {
    const progressBar = event.target as HTMLProgressElement;

    let clickedplace = event.clientX - progressBar.offsetLeft;
    const seekPosition =
      (clickedplace * this.audioPlayer.nativeElement.duration) /
      progressBar.offsetWidth;
    this.audioPlayer.nativeElement.currentTime = seekPosition;
  }
  changeSpeed(): void {
    if (this.speedNum == 3) {
      this.speedNum = 1;
      this.audioPlayer.nativeElement.playbackRate = 1;
    } else if (this.speedNum == 1) {
      this.speedNum = 2;
      this.audioPlayer.nativeElement.playbackRate = 1.5;
    } else if (this.speedNum == 2) {
      this.speedNum = 3;
      this.audioPlayer.nativeElement.playbackRate = 2;
    }
  }
}
