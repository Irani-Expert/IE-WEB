import { Component, ElementRef, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ModalService } from './services/modal.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';

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
  @Input('footer') footer: boolean = false;
  @Input('header') header: boolean = true;
  @Input('overflow') overflow!: string;
  @Input('width') width: string = 'auto';
  constructor(
    private el: ElementRef,
    private modal: ModalService,
    private _meta: Meta
  ) {
    this._meta.addTag({ name: 'robots', content: 'none' });
  }
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
    this._meta.removeTag('content=none');
    this.close();
  }
}
