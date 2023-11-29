import { Component, Input, OnInit } from '@angular/core';
import { RatingConfig, StarRating } from 'src/app/shared/rating/rating-config';
import { planInterface } from './interfaces/product-interface';
import { SingleProduct } from 'src/app/classes/interfaces/product.interface';

const planInit: planInterface = {
  active: false,
  id: -1,
  offPrice: 0,
  price: 0,
  title: '',
};
@Component({
  selector: 'app-shop-hero',
  templateUrl: './shop-hero.component.html',
  styleUrls: ['./shop-hero.component.scss'],
})
export class ShopHeroComponent implements OnInit {
  @Input('data') product: SingleProduct;
  // ============[ستاره ها]==================
  star: RatingConfig<StarRating> = {
    type: 1,
    content: { readonly: true, currentRate: 4, rate: 5 },
  };
  // ============[سرویس ]==================
  selectedPlan: planInterface = planInit;
  plans: planInterface[] = new Array<planInterface>();
  constructor() {}
  async ngOnInit() {
    this.product.plans
      .filter((it) => it.isActive == true)
      .forEach((it, i) => {
        if (i <= 3) {
          this.plans.push({
            offPrice: 0,
            id: it.id,
            active: false,
            price: it.price,
            title: it.title,
          });
        } else {
          return;
        }
      });

    this.selectedPlan = this.plans[0];
    this.selectedPlan.active = true;
  }

  // ==========={اکتیو}=========
  toggle(plan: planInterface) {
    this.plans.forEach((item) => (item.active = false));
    plan.active = true;
    this.selectedPlan = plan;
  }
}
