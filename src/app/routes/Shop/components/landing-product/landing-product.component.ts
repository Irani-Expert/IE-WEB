import { Component } from '@angular/core';
import { SingleProduct } from 'src/app/classes/interfaces/product.interface';

import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { ProductService } from 'src/app/classes/services/product.service';

@Component({
  selector: 'app-landing-product',
  templateUrl: './landing-product.component.html',
  styleUrls: ['./landing-product.component.scss'],
})
export class LandingProductComponent {
  loading: boolean = true;
  product: SingleProduct;

  constructor(
    private _activatedRoute: ActivatedRoute,
    public productService: ProductService,
    private meta: Meta
  ) {
    this._activatedRoute.url.subscribe((it) => console.log(it));
  }
  ngOnInit() {
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
    this.productService.get(`Product/GetByID/${id}`).subscribe({
      next: (value) => {
        if (value.success) {
          this.product = value.data;
          this.loading = false;
        }
      },
    });
  }
  async ngAfterViewInit() {
    this.getProduct(1);
  }
}
