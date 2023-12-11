import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-product',
  templateUrl: './landing-product.component.html',
  styleUrls: ['./landing-product.component.scss'],
})
export class LandingProductComponent {
  loading: boolean = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    public productService: ProductService
  ) {}
  async ngOnInit() {
    this._activatedRoute.params.subscribe({
      next: async (item: any) => {
        await this.getProduct(parseInt(item.id));
      },
    });
  }

  // =========[اسکرول]=========
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  async getProduct(id: number) {
    if (await this.productService.getProduct(id)) {
      this.loading = false;
    }
  }
}
