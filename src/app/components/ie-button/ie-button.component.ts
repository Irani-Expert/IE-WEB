import { Component, Input } from '@angular/core';

@Component({
  selector: 'ie-button',
  templateUrl: './ie-button.component.html',
  styleUrls: ['./ie-button.component.scss'],
  standalone: true,
})
export class IeButtonComponent {
  @Input('text') text: string = '';
  @Input('classList') class: string = '';
  constructor() {}
}
