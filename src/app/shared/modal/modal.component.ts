import { Component, ElementRef, Input } from '@angular/core';
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
        style({ scale: '0.7' }),
        animate('350ms ease-out', style({ scale: '1' })),
      ]),
      transition(':leave', [
        style({ scale: '1' }),
        animate('350ms ease-out', style({ scale: '0' })),
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
  @Input('header') header: boolean = true;
  @Input('overflow') overflow!: string;
  @Input('width') width: string = 'auto';
  constructor(private el: ElementRef, private modal: ModalService) {}
  ngOnInit() {
    if (AppComponent.isBrowser.value) {
      document.body.appendChild(this.el.nativeElement);
      document.body.style.overflow = 'hidden';
    }
  }
  close() {
    this.modal.closeModal();
    this.el.nativeElement.remove();
  }
  ngOnDestroy() {
    this.close();
    document.body.style.overflow = 'auto';
  }
}
