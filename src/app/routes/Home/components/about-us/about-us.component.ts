import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    // Animation definition
    trigger('fadeInAnimation', [
      state('show', style({ opacity: 1 })), // Visible state
      state('hide', style({ opacity: 0, display: 'none' })), // Hidden state
      transition('* => *', animate('500ms ease-out')), // Animation duration and easing
    ]),
  ],
})
export class AboutUsComponent {
  buttonText = 'باز کردن لیست پخش';
  isVideoOpend: boolean = false;
  openVideoList() {
    this.isVideoOpend = !this.isVideoOpend;
  }
}
