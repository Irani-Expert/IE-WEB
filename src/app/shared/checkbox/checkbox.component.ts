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
  @Input('size') size?: 'lg' | 'sm' = 'sm';
  @Output('checked') checked = new EventEmitter<boolean>();
  @Input('fillOrNot') fillTheBox: boolean = false;
  width: string = '10px';
  height: string = '10px';
  inputStatus(value: boolean) {
    this.checked.emit(value);
    this.fillTheBox = value;
  }
  ngOnInit() {
    if (this.size == 'lg') {
      this.width = '15px';
      this.height = '15px';
    } else {
      this.width = '10px';
      this.height = '10px';
    }
  }
}
