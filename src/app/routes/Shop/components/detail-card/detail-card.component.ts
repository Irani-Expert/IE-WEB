import { Component, Input } from '@angular/core';
// import { IProducts } from './products';
@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent {
  @Input('item') product: any;
  constructor() {}
  views: number = 773;
  ngOnInit() {
    // this.getProduct();
  }
  // getProduct() {
  //  this.product.id = this._productService._paginatedPrd!.items![0].id!
  //  this.product.description = this.p
  // }
}
