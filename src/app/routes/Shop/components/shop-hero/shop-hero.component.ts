import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RatingConfig, StarRating } from 'src/app/shared/rating/rating-config';
import { planInterface } from './interfaces/product-interface';
import { SingleProduct } from 'src/app/classes/interfaces/product.interface';
import { smoothWidth } from 'src/app/classes/animation';
import { Utils } from 'src/app/classes/utils';
import { AppComponent } from 'src/app/app.component';
// import { OrderService } from 'src/app/classes/services/order.service';

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
  animations: [smoothWidth],
})
export class ShopHeroComponent implements OnInit {
  constructor() {} // private localStorage: LocalStorageService // private _orderService: OrderService
  @ViewChild('scroll') scroll: ElementRef;
  animationState = false;
  @Input('data') product: SingleProduct;
  // ============[ستاره ها]==================
  star: RatingConfig<StarRating> = {
    type: 1,
    content: { readonly: true, currentRate: 4, rate: 5 },
  };
  // ============[سرویس ]==================
  selectedPlan: planInterface = planInit;
  plans: planInterface[] = new Array<planInterface>();

  async ngOnInit() {
    this.updateDeviceValue();
    this.product.plans
      .filter((it) => it.isActive == true)
      .forEach((it) => {
        this.plans.push({
          offPrice: 0,
          id: it.id,
          active: false,
          price: it.price,
          title: it.title,
        });
      });

    this.selectedPlan = this.plans[0];
    this.selectedPlan.active = true;
  }

  // ==========={اکتیو}=========
  toggle(plan: planInterface, index: number) {
    if (this.selectedPlan.id == plan.id) {
      return;
    }
    this.plans.forEach((item) => (item.active = false));
    plan.active = true;
    this.selectedPlan = plan;
    this.fireAnimation();
  }
  // =================[انیمیشن]============
  changed = false;

  fireAnimation() {
    this.changed = !this.changed;
    this.animationState = true;
    setTimeout(() => {
      this.animationState = false;
    }, 400);
  }
  // =================[رسپانسیو]============
  device: 'sm' | 'lg' = 'lg';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isMobileL()) {
        this.device = 'sm';
      } else {
        this.device = 'lg';
      }
    }
  }
}
