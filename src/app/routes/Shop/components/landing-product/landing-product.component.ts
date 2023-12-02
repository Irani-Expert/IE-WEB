import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-landing-product',
  templateUrl: './landing-product.component.html',
  styleUrls: ['./landing-product.component.scss'],
})
export class LandingProductComponent {
  loading: boolean = true;
  constructor(public productService: ProductService) {}
  async ngOnInit() {
    if (await this.productService.getProduct(1)) {
      this.loading = false;
    }
  }

  // =========[اسکرول]=========
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
