import { Component } from '@angular/core';
import { SingleProduct } from 'src/app/classes/interfaces/product.interface';
import { OrderService } from 'src/app/classes/services/order.service';
import { ProductService } from 'src/app/routes/Shop/components/product.service';
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
  discountPrice = '10%';
  data: SingleProduct | null;
  basket: Basket;
  constructor(private product: ProductService, private order: OrderService) {
    this.data = this.product._product;
    this.order.basket$.subscribe((it) => {
      this.basket = it;
    });
  }
  ngOnInit() {
    console.log(this.data);
  }
}
