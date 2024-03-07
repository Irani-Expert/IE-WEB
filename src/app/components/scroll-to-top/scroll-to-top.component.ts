import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Utils } from 'src/app/classes/utils';
import { AppComponent } from 'src/app/app.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, scale: 0.1 }),
        animate('300ms ease-in-out', style({ opacity: 1, scale: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0, scale: 0 })),
      ]),
    ]),
  ],
})
export class ScrollToTopComponent {
  showUpButton: boolean = false;
  scroll() {
    Utils.scrollTopWindow();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (AppComponent.isBrowser.value) {
      if (Utils.scrollTracker() > 310) {
        this.showUpButton = true;
      } else if (document.documentElement.scrollTop < 290) {
        this.showUpButton = false;
      }
    }
  }
}
