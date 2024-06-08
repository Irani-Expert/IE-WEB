import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { timeconvert } from '../../../ts/NumToTime';
@Component({
  selector: 'app-voice-player',
  templateUrl: './voice-player.component.html',
  styleUrls: ['./voice-player.component.scss'],
})
export class VoicePlayerComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  @ViewChild('progressBar') progressBar!: ElementRef<HTMLElement>;
  @Input() audioSource: string;
  progressBarValue = 0;
  dotMovement: string = ' 0px';
  time: string = '0:00';
  Pause_Play: boolean = false;
  speedNum: number = 1;
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

  startSeek(event: MouseEvent) {
    event.preventDefault();

    const width = this.progressBarElement.offsetWidth;

    const moveSeek = (moveEvent: MouseEvent) => {
      const offset = moveEvent.offsetX;
      this.progressBarElement.classList.add('active');

      const newPercent = Math.min(Math.max((offset / width) * 100, 0), 100);
      this.progressBarValue = newPercent;
      this.audioPlayer.nativeElement.currentTime =
        (newPercent / 100) * this.audioPlayer.nativeElement.duration;
    };

    const stopSeek = () => {
      this.progressBarElement.classList.remove('active');
      this.progressBarElement.removeEventListener('mousemove', moveSeek);
      this.progressBarElement.removeEventListener('mouseup', stopSeek);
      this.progressBarElement.removeEventListener('mouseleave', stopSeek);
    };

    this.progressBarElement.addEventListener('mousemove', moveSeek);
    this.progressBarElement.addEventListener('mouseup', stopSeek);
    this.progressBarElement.addEventListener('mouseleave', stopSeek);

    moveSeek(event);
  }

  get progressBarElement() {
    return this.progressBar.nativeElement;
  }

  updateTimeDisplay(event: Event) {
    const audioElement = event.target as HTMLAudioElement;
    const currentTime = audioElement.currentTime;
    const formattedTime = this.formatTime(currentTime);
    this.time = formattedTime;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }
}
