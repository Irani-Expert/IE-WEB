import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'triangle',
  template: `
    <div class="inline-flex justify-center items-center">
      <i class="ie-exclamation contents" [ngStyle]="{ '--scale': scale }"></i>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
  styles: [
    `
      .ie-exclamation::after {
        display: inline-block;
        scale: var(--scale);
        content: url('../../../assets/icon/exclamation-icon.svg');
      }
    `,
  ],
})
export class TriangleComponent {
  @Input('scale') scale: string = '1';
}
