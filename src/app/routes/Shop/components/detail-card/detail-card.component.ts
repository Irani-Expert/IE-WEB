import { Component, Input } from '@angular/core';
import { RatingConfig, StarRating } from 'src/app/shared/rating/rating-config';
import { environment } from 'src/environments/environment.dev';
// import { IProducts } from './products';
@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent {
  contentUrl = environment.contentUrl;
  ratingConfig: RatingConfig<StarRating> = {
    content: { currentRate: 0, rate: 5, readonly: true },
    type: 1,
  };
  @Input('item') product: any;
  constructor() {}
  views: number = 773;
  ngOnInit() {
    (this.ratingConfig.content.rate = 5),
      (this.ratingConfig.content.currentRate = this.product.rate);
  }
  // getProduct() {
  //  this.product.id = this._productService._paginatedPrd!.items![0].id!
  //  this.product.description = this.p
  // }
}
