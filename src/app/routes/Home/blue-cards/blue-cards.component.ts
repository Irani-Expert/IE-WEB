import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-cards',
  templateUrl: './blue-cards.component.html',
  styleUrls: ['./blue-cards.component.scss'],
})
export class BlueCardsComponent {
  @Input('head') title: string;
  @Input('body') text: string;
  @Input() id = '';
}
