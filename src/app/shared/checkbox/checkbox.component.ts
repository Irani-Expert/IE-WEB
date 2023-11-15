import {
  Component,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'checkbox',
  templateUrl: 'checkbox.component.html',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Checkbox {
  @Output('checked') checked = new EventEmitter<boolean>();

  inputStatus(value: boolean) {
    this.checked.emit(value);
  }
}
