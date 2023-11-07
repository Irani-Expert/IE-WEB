import { Component, Input } from '@angular/core';
import { IProducts } from '../detail-card/products';
@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent {
  @Input() product!: IProducts;

  views: number = 773;
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    //write get services here
  }
}
