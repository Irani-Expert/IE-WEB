import { CommonModule } from '@angular/common';

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `<div class="toggle-container">
    <input
      class="toggle"
      (click)="check($any($event.target).checked)"
      type="checkbox"
      [id]="name"
    /><label
      [for]="name"
      class="border-solid bg-[#d8d8d8] border-01 toggle-label"
      >Toggle</label
    >
    <ng-content></ng-content>
  </div>`,
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Toggler {
  @Input('name') name!: string;
  @Output('checked') checked = new EventEmitter<boolean>(false);
  check(event: boolean) {
    this.checked.emit(event);
  }
}
