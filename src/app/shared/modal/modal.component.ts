import { Component, ElementRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ModalService } from './services/modal.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, scale: '0.7' }),
        animate('350ms ease-out', style({ opacity: 1, scale: '1' })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ModalComponent {
  constructor(private el: ElementRef, private modal: ModalService) {}
  ngOnInit() {
    if (AppComponent.isBrowser.value) {
      document.body.appendChild(this.el.nativeElement);
    }
  }
  close() {
    this.modal.closeModal();
    this.el.nativeElement.remove();
  }
  ngOnDestroy() {
    this.close();
  }
}
