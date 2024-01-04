import { Component, Input } from '@angular/core';

@Component({
  selector: 'broker-img-card',
  templateUrl: './broker-img-card.component.html',
  styleUrls: ['./broker-img-card.component.scss'],
})
export class BrokerImgCardComponent {
  @Input('linkCard') linkCard: boolean = false;
  @Input('data') data: any;
}
