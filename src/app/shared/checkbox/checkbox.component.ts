import {
  Component,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
  Output,
  Input,
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
  @Input('fillOrNot') fillTheBox: boolean = false;
  inputStatus(value: boolean) {
    this.checked.emit(value);
  }
}
