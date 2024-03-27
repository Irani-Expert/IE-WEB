import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss'],
})
export class ShowMoreComponent {
  @Input('tableLength') length = 0;
  @Output('event') emitter = new EventEmitter<'more' | 'less'>();

  emit(type: 'more' | 'less') {
    this.emitter.emit(type);
  }
}
