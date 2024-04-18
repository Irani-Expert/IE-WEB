import { Component } from '@angular/core';
import { SingleProduct } from 'src/app/classes/interfaces/product.interface';
import { OrderService } from 'src/app/classes/services/order.service';
import { ProductService } from 'src/app/classes/services/product.service';
import { Basket } from 'src/app/classes/interfaces/basket.interface';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'checkout-detail-card',
  templateUrl: './checkout-detail-card.component.html',
  styleUrls: ['./checkout-detail-card.component.scss'],
})
export class CheckoutDetailCardComponent {
  contentUrl = environment.contentUrl;
  discount = false;
  discountPercent = 0;
  data: SingleProduct | null;
  basket: Basket;
  constructor(private product: ProductService, private order: OrderService) {}
  async ngOnInit() {
    this.basket = this.order.basket.value;
    let productItem = this.product._product;
    if (productItem) {
      this.data = productItem;
    } else {
      let productID = this.basket.basketItems.find(
        (it) => it.tableType == 6
      )!.id;
      this.product.getProduct(productID!).then((result) => {
        this.data = this.product._product;
      });
    }
  }

  get lastPrice() {
    let price = (this.basket.totalPrice * 100) / (100 - this.discountPercent);

    return price;
  }
}
