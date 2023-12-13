import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('50ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('50ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
  standalone: true,
  imports: [CommonModule],
})
export class LoaderComponent {
  constructor(private el: ElementRef) {}
  ngOnInit() {
    if (AppComponent.isBrowser.value) {
      document.body.appendChild(this.el.nativeElement);
    }
  }
}
