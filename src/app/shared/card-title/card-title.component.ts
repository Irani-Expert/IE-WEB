import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
})
export class CardTitleComponent {
  @Input() title!: string;
  @Input() type!: string;
  @Input() iconlink!: string;
}
