import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss'],
})
export class CardLinkComponent {
  @Input() paragraph!: string;
  @Input() btnName!: string;
}
