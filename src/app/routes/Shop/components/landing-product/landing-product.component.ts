import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { ProductService } from '../product.service';
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
    public productService: ProductService,
    private meta: Meta
  ) {}
  async ngOnInit() {
    this._activatedRoute.params.subscribe({
      next: async (item: any) => {
        await this.getProduct(parseInt(item.id));
      },
    });
    // =================[متاتگ ها]==========
    this.meta.updateTag({
      name: 'description',
      content:
        'با خرید ربات ترید ATM در بازارهای مالی و حفظ سرمایه اولیه و افزایش سود صاحب درآمد دلاری شو و با خیال راحت ترید کن',
    });
    this.meta.updateTag({
      name: 'author',
      content: 'مهرنوش کریمی',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'خرید ربات معامله گر- خرید ربات فارکس -ویزگی های ربات- خرید ربات معامله گر فارکس-قیمت ربات خودکار-ربات فارکس تصمینی-قویترین ربات فارکس-ربات فارکس طلا- بهترین ربات طلا فارکس- دمو فارکس رایگان- ربات فارکس- دستیار ترید خودکار فارکس-اکسپرت فارکس-بهترین ربات معامله گری-ربات معامله گری عالی',
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
