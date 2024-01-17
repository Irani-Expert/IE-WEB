import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
interface BrokerImgCard<T> {
  id: T;
  img: string;
  title: string;
  link: string;
}
@Component({
  selector: 'broker-img-card',
  templateUrl: './broker-img-card.component.html',
  styleUrls: ['./broker-img-card.component.scss'],
})
export class BrokerImgCardComponent {
  contentUrl = environment.contentUrl;
  @Input('linkCard') linkCard: boolean = false;
  @Input('data') data: BrokerImgCard<number>;
}
